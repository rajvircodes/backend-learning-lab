const express = require("express");
const checkApi = require("../middlewares/apiKey.middleware");
const {
  aboutPage,
  contactPage,
  protectedPage,
} = require("../controller/page.controller");
const router = express.Router();

router.get("/about", aboutPage);

router.get("/contact", contactPage);
router.get("/protected", checkApi, protectedPage);
module.exports = router;
