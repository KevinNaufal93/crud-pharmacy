const express = require("express");
const { adminTask } = require("../controllers");
const router = express.Router();

router.get("/in", adminTask.stockSearchAll);
router.get("/out", adminTask.transactionSearchAll);
router.post("/add", adminTask.addStock);
router.post("/delete", adminTask.deleteStock);
router.post("/sold", adminTask.addTransaction);
router.post("/remove", adminTask.deleteTransaction);

module.exports = router;