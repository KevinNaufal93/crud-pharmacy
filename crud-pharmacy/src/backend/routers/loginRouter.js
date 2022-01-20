const express = require("express");
const { adminController } = require("../controllers");
const router = express.Router();
const { auth } = require('../helper/auth');

router.post("/", adminController.loginAdmin);
router.get("/keep", auth, adminController.keepLogin);

module.exports = router;