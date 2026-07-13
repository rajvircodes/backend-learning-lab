const pageService = require("../services/page.service");

const aboutPage = (req, res) => {
  const message = pageService.getAboutMessage();
  res.send(message);
};

const contactPage = (req, res) => {
  const message = pageService.getContactMessage();
  res.send(message);
};

const protectedPage = (req, res) => {
  const message = pageService.getProtectedMessage();
  res.send(message);
};

module.exports = { aboutPage, contactPage, protectedPage };
