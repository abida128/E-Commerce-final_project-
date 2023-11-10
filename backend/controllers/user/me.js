// ** JWT import
const jwt = require("jsonwebtoken");
const httpErrors = require("http-errors");
const { User } = require("../../models");

const { getDefaultAuthConfig, getJwtConfig } = require("../../configs/authJwt");

// ** initialize configurations
const defaultAuthConfig = getDefaultAuthConfig();
const jwtConfig = getJwtConfig();

module.exports = async (req, res, next) => {
  // ** Get token from header
  const authTokenRaw = req.headers["authorization"];
  const authTokenSplited = authTokenRaw.split(" ");

  let authToken = "";
  if (authTokenSplited.includes("Bearer")) authToken = authTokenSplited[1];
  else authToken = authTokenSplited[0];

  // ** Checks if the token is valid or expired
  try {
    const decoded = jwt.verify(authToken, jwtConfig.secret);
    if (decoded) {
      // ** If token is valid do nothing
      const userId = decoded.id;

      // ** Get user that matches id in token
      const user = await User.findById(userId);

      const userData = { ...user.toObject(), password: undefined };
      // ** return 200 with user data
      const payload = { accessToken: authToken, userData };

      return res.status(200).json(payload);
    }
  } catch (err) {
    // ** If token is expired
    // ** If onTokenExpiration === 'logout' then send 401 error
    if (defaultAuthConfig.onTokenExpiration === "logout") {
      // ** 401 response will logout user from AuthContext file
      return next(httpErrors(401, "Invalid User"));
    }
    // ** If onTokenExpiration === 'refreshToken' then generate the new token
    try {
      const oldTokenDecoded = jwt.decode(authToken, { complete: true });
      if (oldTokenDecoded) {
        const { id } = oldTokenDecoded.payload;
        const user = await User.findById(id);

        const accessToken = jwt.sign({ id }, jwtConfig.secret, {
          expiresIn: jwtConfig.expirationTime,
        });
        // ** Set new token in localStorage
        const userData = { ...user.toObject() };

        // **  delete password from user data before sending request
        delete userData.password;
        // ** return 200 with user data

        const payload = { accessToken, userData };

        return res.status(200).json(payload);
      }
      next(httpErrors(401, "access token not found"));
    } catch (err) {
      next(httpErrors(404, err.message));
    }
  }
};
