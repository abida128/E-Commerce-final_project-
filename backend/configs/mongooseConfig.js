const mongoose = require("mongoose");

const URI = process.env.URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);

    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
