const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./router')
const cors = require('cors');

const app = express()
//để ý có thể sai khi sử dụng Ai hôc trợ code
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
dbConnect()

initRoutes(app)
app.listen(port, () => {
    console.log('Server running on th port: ' + port)
})