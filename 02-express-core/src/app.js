const express = require("express");
const app = express();
const router = require("./routes/index");
const logger = require("./middlewares/logger.middleware");
const requestTime = require("./middlewares/requestTime.middleware");
app.use("/", logger, requestTime, router);
module.exports = app;
