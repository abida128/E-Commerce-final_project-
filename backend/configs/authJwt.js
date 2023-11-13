const getDefaultAuthConfig = () => ({
  onTokenExpiration: "refreshToken", // logout | refreshToken
});

const getJwtConfig = () => ({
  expirationTime: process.env.JWT_EXPIRATION,
  secret: process.env.JWT_SECRET,
  refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
});

module.exports = {
  getDefaultAuthConfig,
  getJwtConfig,
};
