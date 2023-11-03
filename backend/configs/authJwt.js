const getJwtConfig = () => ({
  expirationTime: process.env.JWT_EXPIRATION,
  secret: process.env.JWT_SECRET,
});

module.exports = {
  getJwtConfig,
};
