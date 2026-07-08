const checkApi = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey && apiKey === "backend-lab") {
    return next();
  }

  return res.status(401).json({
    success: false,
    message: "Unauthorized",
  });
};

module.exports = checkApi;
