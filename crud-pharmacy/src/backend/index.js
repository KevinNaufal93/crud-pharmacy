const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const bodyParser = require("body-parser");

const port = 2700;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bearerToken());
app.use("/public", express.static("public"));
app.use(express.static('public'))

const {
    singleRouter,
    stockRouter,
    } = require("./routers");

    
app.use("/apothecary", singleRouter);
app.use("/search", singleRouter);
app.use("/stock", stockRouter)
app.use("/login", singleRouter);
app.use("/keepLoggedIn", singleRouter);

app.listen(port, () => console.log(`Server running in port`, port));