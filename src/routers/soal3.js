const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal3C = require ('../controllers/soal3C')

app.post("/decimal", soal3C.decimal)
app.post("/biner", soal3C.biner)
app.post("/octal", soal3C.octal)
app.post("/hexadecimal", soal3C.hexadecimal)

module.exports = app