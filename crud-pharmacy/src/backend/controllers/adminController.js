const { db } = require('../database/db');
const { createToken } = require('../helper/createToken')

module.exports = {

    loginAdmin: (req,res) => {
        let { namaAdmin, passwordAdmin } = req.body;
        console.log(`logging in into ${req.body.namaAdmin}'s account`)
        let scriptQuery = 
        `SELECT * FROM tabel_admin 
        WHERE namaAdmin = ${db.escape(req.body.namaAdmin)} 
        AND passwordAdmin = ${db.escape(req.body.passwordAdmin)}`;
        db.query(scriptQuery, (err, result) => {
            console.log(result)
            if (err) {
                return res.send({err, message: "Wrong username or password"})
            } if (result[0]) {
                //console.log(result[0])
                let { idAdmin, namaAdmin } = result[0]   
                let token = createToken({ idAdmin, namaAdmin })
                console.log(`Create Token successful : ${token}`)
                return res.status(200).send({ dataLogin: result[0], token, message:"Login Success" })
            } else {
                return res.send({err, message: "Account not found"})
            }
        })
    },

    keepLogin: (req,res) => {
        console.log(req.user)
        db.query(`SELECT * FROM tabel_admin WHERE idAdmin = ${req.admin.idAdmin}`,
        (err, result) => {
            if (err) {
                return res.send(err)
            }
            console.log(req.user)
            return res.send(result)
            
        })
    },
}