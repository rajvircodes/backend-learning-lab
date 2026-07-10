const aboutPage = (req, res) => {
  res.send("Welcome to about page");
};

const contactPage = (req, res) => {
  res.send("Welcome to contact page");
};

const protectedPage = (req, res) => {
  res.send("Welcome to contact page");
};

module.exports = { aboutPage, contactPage, protectedPage };
