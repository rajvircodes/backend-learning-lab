const express = require("express");
const router = express.Router();

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});

module.exports = router;
