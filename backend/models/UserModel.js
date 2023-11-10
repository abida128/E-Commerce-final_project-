const { model, Schema, default: mongoose } = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const User = model(
  "user",
  new Schema({
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    shoppingCart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shoppingCart",
    },
  })
);

module.exports = User;
