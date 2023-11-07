require("dotenv").config({});
const express = require("express");
const cors = require("cors");
const { connect } = require("./configs/mongooseConfig");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static(__dirname));
connect();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes"));
app.listen(port, () => {
  console.log("app is running on port ", port);
});
