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
            //console.log(insertQuery)
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

    updateApothecary: (req,res) => {
        let { namaApoteker, kodeApoteker, } = req.body;
        console.log(`API updating for ${kodeApoteker}`)
        let updateQuery = `UPDATE tabel_apoteker SET 
        namaApoteker = ${db.escape(namaApoteker)}
        WHERE kodeApoteker = ${db.escape(kodeApoteker)};`;
        db.query(updateQuery, (err, result) => {
            //console.log(scriptQuery, result)
            if (err) {
                return res.send({err, message: "update result error"})
            } else {
                return res.send({err, message: "update success"})
            }
        })
    },

    deleteApothecary: (req, res) => {
        let { kodeApoteker } = req.body
        let deleteQuery = `DELETE FROM tabel_apoteker WHERE kodeApoteker = ${db.escape(kodeApoteker)};`
            //console.log(deleteQuery)
        db.query(deleteQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing delete Apothecary API")
            return res.status(201).send({message: "Apothecary deleted"})
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
            //console.log(insertQuery)
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

    updateStock: (req,res) => {
        let { sisaObat, kodeObat, } = req.body;
        console.log(`API updating for ${kodeObat}`)
        let updateQuery = `UPDATE tabel_obat SET 
        sisaObat = ${db.escape(sisaObat)}
        WHERE kodeObat = ${db.escape(kodeObat)};`;
        db.query(updateQuery, (err, result) => {
            //console.log(scriptQuery, result)
            if (err) {
                return res.send({err, message: "update result error"})
            } else {
                return res.send({err, message: "update success"})
            }
        })
    },

    deleteStock: (req, res) => {
        let { kodeObat } = req.body
        let deleteQuery = `DELETE FROM tabel_obat WHERE kodeObat = ${db.escape(kodeObat)};`
            //console.log(deleteQuery)
        db.query(deleteQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing delete stock API")
            return res.status(201).send({message: "stock deleted"})
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
            //console.log(insertQuery)
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

    updateTransaction: (req,res) => {
        let { kodeApoteker, idTransaksi, } = req.body;
        console.log(`API updating for ${idTransaksi}`)
        let updateQuery = `UPDATE tabel_transaksi SET 
        kodeApoteker = ${db.escape(kodeApoteker)}
        WHERE idTransaksi = ${db.escape(idTransaksi)};`;
        db.query(updateQuery, (err, result) => {
            //console.log(scriptQuery, result)
            if (err) {
                return res.send({err, message: "update result error"})
            } else {
                return res.send({err, message: "update success"})
            }
        })
    },

    deleteTransaction: (req, res) => {
        let { idTransaksi } = req.body
        let deleteQuery = `DELETE FROM tabel_transaksi WHERE idTransaksi = ${db.escape(idTransaksi)};`
            //console.log(deleteQuery)
        db.query(deleteQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing delete stock API")
            return res.status(201).send({message: "stock deleted"})
            }
        }) 
    },
}