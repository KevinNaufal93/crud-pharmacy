const express = require("express");
const { adminTask } = require("../controllers");
const router = express.Router();

router.get("/in", adminTask.stockSearchAll);
router.get("/out", adminTask.transactionSearchAll);
router.post("/add", adminTask.addStock);
router.post("/sold", adminTask.addTransaction);

module.exports = router;