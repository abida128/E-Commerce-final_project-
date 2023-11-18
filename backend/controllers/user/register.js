const bcrypt = require("bcrypt");
const { User } = require("../../models");
module.exports = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Not valid Data !" });
    }
    const isUser = await User.findOne({ username: username });
    if (isUser) {
      return res.status(409).json({ message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: passwordHashed,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
