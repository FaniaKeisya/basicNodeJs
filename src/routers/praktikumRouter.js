const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const praktikumControllers = require('../controllers/praktikumControllers')

app.get ("/profil/:name/:age", praktikumControllers.profil)
app.post("/bujur_sangkar", praktikumControllers.bujur_sangkar)

module.exports = app