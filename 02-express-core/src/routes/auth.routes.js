const express = require("express");
const { getUserById, getAllUsers } = require("../controller/auth.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/users/:id", getUserById);

module.exports = router;
