const requestTime = (req, res, next) => {
  console.log(new Date().toISOString());
  return next();
};

module.exports = requestTime;
