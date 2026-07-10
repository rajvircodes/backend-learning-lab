const express = require("express");
const { getUserById, getAllUsers } = require("../controller/auth.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
