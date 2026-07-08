const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Backend learning");
});

router.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

router.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
module.exports = router;
