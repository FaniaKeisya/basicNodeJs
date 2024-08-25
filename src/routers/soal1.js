const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal1C = require ('../controllers/soal1C')

app.post("/kubus", soal1C.kubus)
app.post("/balok", soal1C.balok)
app.post("/bola", soal1C.bola)
app.post("/tabung", soal1C.tabung)

module.exports = app