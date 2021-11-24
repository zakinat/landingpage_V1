//dependencies
const express=require('express')
require('express-async-errors')
const dotenv=require('dotenv')
const cors=require('cors')
const cookieParser = require('cookie-parser')

//functions
const connectDB=require('./config/db')
const {errorHandler} = require('./_middleware/error-handler');



//Load config
dotenv.config({path:'./config/config.env'})

connectDB()

//init server app
const app=express()

// body parser
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }))


//use routes
app.use('/api/auth',require('./user.auth/user.routes'))


// global error handler
app.use(errorHandler)


//start server
const PORT=process.env.PORT || 5000


app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))