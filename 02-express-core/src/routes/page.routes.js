const express = require("express");
const checkApi = require("../middlewares/apiKey.middleware");
const router = express.Router();
checkApi;
router.get("/", (req, res) => {
  res.send("Welcome to Backend learning");
});

router.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

router.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
router.get("/protected", checkApi, (req, res) => {
  res.send("Welcome to contact page");
});
module.exports = router;
