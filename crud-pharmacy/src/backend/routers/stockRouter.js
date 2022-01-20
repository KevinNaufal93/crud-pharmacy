const express = require("express");
const { adminTask } = require("../controllers");
const router = express.Router();

router.get("/in", adminTask.stockSearchAll);
router.get("/out", adminTask.transactionSearchAll);

module.exports = router;