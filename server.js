const express = require('express')
const mongoose = require ('mongoose')
const url = 'mongodb://localhost/usedata'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open', () => {
    console.log('connected!')
})
app.use(express.json())
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
const userRouter = require('./routes/userinfo')

app.use('/',userRouter)

app.listen(9000, () => {
    console.log('server started')

})