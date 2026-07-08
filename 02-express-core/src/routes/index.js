const express = require("express");
const router = express.Router();

const pageRoutes = require("./page.routes");
const userRoutes = require("./user.routes");
const healthRoutes = require("./health.routes");

router.use("/", healthRoutes);
router.use("/", pageRoutes);
router.use("/", userRoutes);

module.exports = router;
