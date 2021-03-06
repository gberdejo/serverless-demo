const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

module.exports = app;
