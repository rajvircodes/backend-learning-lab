const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to backend learning lab 😍");
});
app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});
app.get("/greet", (req, res) => {
  const username = req.query.name;

  res.json({
    message: `Hello ${username}`,
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy!",
  });
});
module.exports = app;
