const mongoose = require("mongoose");
require("dotenv").config({path: "variables.env"});
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
