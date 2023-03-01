require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// express app
const app = express()
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
const cors = require('cors')

var corsOptions = {
  origin: ' http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// middleware
app.use(express.json())
app.use(cors(corsOptions))
/* app.use((req, res, next) => {
  console.log('req: ', req.headers);
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,host,connection,sec-ch-ua,accept,x-auth-token,sec-ch-ua-mobile,authorization,user-agent,sec-ch-ua-platform,origin,sec-fetch-site,sec-fetch-mode,sec-fetch-dest,referer,accept-encoding,accept-language,if-none-match,');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
})*/

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
