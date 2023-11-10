const { getJwtConfig } = require("../../configs/authJwt");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const jwtConfig = getJwtConfig();

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "No password or email" });
    }

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordCheck = await bcrypt.compare(password, user.password);
    if (!isPasswordCheck)
      return res.status(404).json({ message: "Invalid Credentials." });

    const accessToken = jwt.sign({ id: user._id }, jwtConfig.secret, {
      expiresIn: jwtConfig.expirationTime,
    });
    delete user.password;

    const resPayload = {
      accessToken,
      userData: { ...user.toObject() }, // Remove .toObject() from here
    };

    return res.status(200).json(resPayload);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
