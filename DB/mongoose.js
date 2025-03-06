const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
  