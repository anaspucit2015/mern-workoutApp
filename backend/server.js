require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// express app
const app = express()
const workoutRoutes = require('./routes/workout')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//Routes

app.use('/api/workouts', workoutRoutes)

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
