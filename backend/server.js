var express = require('express')
var dotenv = require('dotenv').config()
const cors = require('cors');

const connectDB = require('./config/db')
const port = process.env.PORT
connectDB()



const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//BASIC ENDPOINTS
app.use('/api/todos',require('./routes/TodoRoutes'))

app.use('/api/users',require('./routes/UserRoutes'))





app.listen(port,()=>console.log(`Server on ${port}`))
