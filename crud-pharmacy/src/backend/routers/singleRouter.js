const express = require("express");
const { adminController } = require("../controllers");
const { adminTask } = require("../controllers");
const router = express.Router();
const { auth } = require('../helper/auth');

router.post("/", adminController.loginAdmin);
router.post("/add", adminTask.addApothecary);
router.post("/delete", adminTask.deleteApothecary);
router.get("/keep", auth, adminController.keepLogin);
router.get("/all", adminTask.searchAll);

module.exports = router;