const logger = (req, res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  console.log(method, url);

  return next();
};

module.exports = logger;
