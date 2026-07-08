const express = require("express");
const app = express();
const rootRouter = require("./routes/index");

app.use("/", rootRouter);
module.exports = app;
