const express = require("express");
const router = express.Router();
// const logger = require("../middlewares/logger.middleware");

const pageRoutes = require("./page.routes");
const authRoutes = require("./auth.routes");
const healthRoutes = require("./health.routes");

router.use("/health", healthRoutes);
router.use("/", pageRoutes);
router.use("/", authRoutes);

module.exports = router;
