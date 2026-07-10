const requestTime = (req, res, next) => {
  console.log(new Date().toISOString());
  next();   
};

module.exports = requestTime;
