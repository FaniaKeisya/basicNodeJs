const express = require("express") 

const cors = require("cors") 
const app = express()


app.use(cors())


// import routers 
// menggunakan 1 titik karena masih 1 folder (src)
const praktikum = require('./routers/praktikumRouter')
const soal1 = require('./routers/soal1')
const soal2 = require('./routers/soal2')
const soal3 = require('./routers/soal3')
const soal4 = require('./routers/soal4')

// implementasi routers
app.use('/praktikum', praktikum)
app.use('/soal1', soal1)
app.use('/soal2', soal2)
app.use('/soal3', soal3)
app.use('/soal4', soal4)

app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    res.json(response)
})

app.listen(4000, () => {
    console.log("Server run on port 4000");
})