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
        let { namaApoteker, kodeApoteker } = req.body
        let insertQuery = `INSERT INTO order_db (so, client, product, design, potong, press, sablon, bordir, jahit, finishing, deadline, order_status) values (
        ${db.escape(namaApoteker)},
        ${db.escape(kodeApoteker)}
        );`
            console.log(insertQuery)
        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
            console.log("Success Processing add Order API")
            return res.status(201).send({message: "order created"})
            }
        }) 
    },
}