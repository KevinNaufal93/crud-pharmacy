const { db } = require('../database/db');


module.exports = {

    searchAll : (req,res) => {
    db.query(`SELECT * FROM tabel_apoteker;`,
    (err, result) => {
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            console.log(result)
            res.send(result)
        } else {
            res.send({ message: "Wrong username or password" })
        }
        })
    },

    stockSearchAll : (req,res) => {
        db.query(`SELECT * FROM tabel_obat;`,
        (err, result) => {
            if (err) {
                res.send(err)
            }
            if (result.length > 0) {
                console.log(result)
                res.send(result)
            } else {
                res.send({ message: "Wrong username or password" })
            }
            })
        },

    transactionSearchAll : (req,res) => {
            db.query(`SELECT * FROM tabel_transaksi;`,
            (err, result) => {
                if (err) {
                    res.send(err)
                }
                if (result.length > 0) {
                    console.log(result)
                    res.send(result)
                } else {
                    res.send({ message: "Wrong username or password" })
                }
            })
        },

    addApothecary: (req, res) => {
        let { namaApoteker, kodeApoteker, tanggalLahir } = req.body
        let insertQuery = `INSERT INTO tabel_apoteker (namaApoteker, kodeApoteker, tanggalLahir) values (
        ${db.escape(namaApoteker)},
        ${db.escape(kodeApoteker)},
        ${db.escape(tanggalLahir)}
        );`
            console.log(insertQuery)
        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing add Apothecary API")
            return res.status(201).send({message: "Apothecary created"})
            }
        }) 
    },

    addStock: (req, res) => {
        let { namaObat, kodeObat, hargaObat, sisaObat, tanggalObat } = req.body
        let insertQuery = `INSERT INTO tabel_obat (namaObat, kodeObat, hargaObat, sisaObat, tanggalObat) values (
        ${db.escape(namaObat)},
        ${db.escape(kodeObat)},
        ${db.escape(hargaObat)},
        ${db.escape(sisaObat)},
        ${db.escape(tanggalObat)}
        );`
            console.log(insertQuery)
        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing add Drugs API")
            return res.status(201).send({message: "Stock created"})
            }
        }) 
    },

    addTransaction: (req, res) => {
        let { idTransaksi, kodeObat, jumlahJual, kodeApoteker, tanggalBeli } = req.body
        let insertQuery = `INSERT INTO tabel_transaksi (idTransaksi, kodeObat, jumlahJual, kodeApoteker, tanggalBeli) values (
        ${db.escape(idTransaksi)},   
        ${db.escape(kodeObat)},
        ${db.escape(jumlahJual)},
        ${db.escape(kodeApoteker)},
        ${db.escape(tanggalBeli)}
        );`
            console.log(insertQuery)
        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing add Transaction API")
            return res.status(201).send({message: "Stock created"})
            }
        }) 
    },
}