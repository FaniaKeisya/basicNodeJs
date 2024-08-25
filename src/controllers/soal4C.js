exports.bmicalculator = (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let status = ""

    let bmi = berat / (tinggi * tinggi)

    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    }
    else if ( bmi >= 18.5){
        status = "Normal (Ideal)"
    }
    else if (bmi >= 25.0){
        status = "Kelebihan berat badan"
    }
    else if (bmi >= 30.0){
        status = "Kegemukan"
    }
    else{}


    let response = {
        tinggi: tinggi + " m",
        berat: berat,
        bmi: bmi.toFixed(1),
        status: status 
    }
    return res.json(response)
}