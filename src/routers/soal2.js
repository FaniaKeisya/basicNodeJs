const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal2C = require ('../controllers/soal2C')

app.post("/celcius", soal2C.celcius)
app.post("/fahrenheit", soal2C.fahrenheit)
app.post("/kelvin", soal2C.kelvin)
app.post("/reamur", soal2C.reamur)

module.exports = app