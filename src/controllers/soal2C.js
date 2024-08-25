exports.celcius = (req, res) => {
    let c = Number(req.body.c)

    let fahrenheit = (c * 9/5) + 32
    let kelvin = c + 273.15
    let reamur = c * 4/5

    let response = {
        celcius: c,
        result : {
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            reamur: reamur
        }
    }
    return res.json(response)
}

exports.fahrenheit = (req, res) => {
    let f = Number(req.body.f)

    let celcius = (f - 32) * 5/9
    let kelvin = (f - 32) + 273.15
    let reamur = (f - 32) * 4/9

    let response = {
        fahrenheit: f,
        result : {
            celcius: celcius,
            kelvin: kelvin,
            reamur: reamur
        }
    }
    return res.json(response)
}

exports.kelvin = (req, res) => {
    let k = Number(req.body.k)

    let celcius = k - 273.15
    let fahrenheit = (k - 273.15) * 9/5 + 32
    let reamur = (k - 273.15) * 4/5

    let response = {
        kelvin: k,
        result: {
            fahrenheit: fahrenheit,
            celcius: celcius,
            reamur: reamur
        } 
    }
    return res.json(response)
}

exports.reamur = (req, res) => {
    let r = Number(req.body.r)

    let celcius = r * 5/4
    let fahrenheit = (r * 9/4) + 32
    let kelvin = (r * 5/4) + 273.15

    let response = {
        reamur: r,
        result: {
            fahrenheit: fahrenheit,
            celcius: celcius,
            kelvin: kelvin
        }
    }
    return res.json(response)
}