// const me = (req, res, next) => {};

module.exports = (req, res, next) => {
  res.status(200).json(req.user);
};
