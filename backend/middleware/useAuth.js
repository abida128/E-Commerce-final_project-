const jwt = require("jsonwebtoken");
const { getJwtConfig } = require("../configs/authJwt");
const User = require("../models/UserModel");
const jwtConfig = getJwtConfig();

module.exports = async (req, res, next) => {
  try {
    // ** Get token from header
    const rawAuthToken = req.headers["authorization"];

    if (!rawAuthToken)
      return res.status(403).json({ message: "access token required" });

    // if token contains Bearer, extract token
    const authTokenSplitted = rawAuthToken.split(" ");
    let authToken = "";
    if (authTokenSplitted.includes("Bearer")) authToken = authTokenSplitted[1];
    else authToken = authTokenSplitted[0];

    // ** decode token
    const decoded = jwt.verify(authToken, jwtConfig.secret);
    if (decoded) {
      // ** If token is valid do nothing
      const userId = decoded.id;
      // ** Get user that matches id in token
      const user = await User.findById(userId);
      const userData = { ...user.toObject(), password: undefined };
      // ** return 200 with user data
      req.user = userData;

      next();

      return;
    }

    res.status(403).json({ message: "authentication failed" });
  } catch (err) {
    res.status(500).json({ message: err.message || "something went wrong" });
  }
};
