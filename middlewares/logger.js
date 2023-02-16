const logger = {};

logger.mdw1 = (req, res, next) => {
  const date = new Date();
  if (
    date.getDay() == 0 ||
    date.getDay() == 6 ||
    date.getHours < 9 ||
    date.getHours > 17
  ) {
    res.send("closed");
  } else next();
};

module.exports = logger;
