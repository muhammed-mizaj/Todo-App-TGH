var express = require('express')
const port = process.env.PORT

const connectDB = require('./config/db')
connectDB()
const app = express()

app.use('/api/todos',require('./routes/TodoRoutes'))

app.listen(port,()=>console.log(`Server on ${port}`))
