require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// express app
const app = express()
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})

//Routes

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// db connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Database Connected && Listening on Port ', process.env.PORT)
    })
  })
  .catch(err => {
    console.log(err)
  })
