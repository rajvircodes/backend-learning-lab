const express = require("express");
const router = express.Router();
// const logger = require("../middlewares/logger.middleware");

const pageRoutes = require("./page.routes");
const userRoutes = require("./user.routes");
const healthRoutes = require("./health.routes");

router.use("/health", healthRoutes);
router.use("/", pageRoutes);
router.use("/users", userRoutes);

module.exports = router;
