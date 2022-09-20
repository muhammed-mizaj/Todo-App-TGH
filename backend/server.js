var express = require('express')
var dotenv = require('dotenv').config()

const connectDB = require('./config/db')
const port = process.env.PORT
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/todos',require('./routes/TodoRoutes'))
app.listen(port,()=>console.log(`Server on ${port}`))
