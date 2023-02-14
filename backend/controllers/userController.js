const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const generateToken = _id => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
  try{
    const { email, password } = req.body
    if (!email || !password) {
      throw Error('All fields must be filled')
    }

    const user = await User.findOne({ email })

    if (!user) {
      throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
      throw Error("Incorrect password")
    }

    const token = generateToken(user._id)
    res.status(200).json({ email, token, message: "Login Successfull"})
  } catch(error){
    res.status(400).json({ error: error.message })
  }
}

const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw Error('All fields must be filled')
    }

    if (!validator.isEmail(email)) {
      throw Error('Email is not valid')
    }

    if (!validator.isStrongPassword(password)) {
      throw Error('Password is not strong enough')
    }

    const exists = await User.findOne({ email })

    if (exists) {
      throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({ email, password: hash })
    const token = generateToken(user.id)

    res.status(200).json({ email, token })
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser }
