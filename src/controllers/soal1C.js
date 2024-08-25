//endpoint kubus
exports.kubus = (req, res) =>{
    let sisi = Number(req.body.sisi)
    
    let volume = sisi * sisi * sisi
    let luasPermukaan = 6 * sisi * sisi

    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

//endpoint balok
exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luasPermukaan = (2 * panjang * lebar) + (2 * panjang * tinggi) + (2 * lebar * tinggi)

    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi, 
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

//endpoin bola 
exports.bola = (req, res) => {
    let jarijari = Number(req.body.jarijari)

    let volume = 4/3 * Math.PI * jarijari * jarijari * jarijari
    let luasPermukaan = Math.PI * 4 * jarijari * jarijari

    let response = {
        jarijari: jarijari,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}

//endpoin tabung
exports.tabung = (req,res) =>{
    let jarijari = Number(req.body.jarijari)
    let tinggi = Number(req.body.tinggi)

    let volume = Math.PI * jarijari * jarijari * tinggi
    let luasPermukaan = (2 * Math.PI * jarijari * tinggi) + (2 * Math.PI * jarijari * tinggi)

    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }
    return res.json(response)
}