require("dotenv").config({});
const express = require("express");
const { connect } = require("./configs/mongooseConfig");
const app = express();
const port = process.env.PORT || 8000;

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes"));
app.listen(port, () => {
  console.log("app is running on port ", port);
});
