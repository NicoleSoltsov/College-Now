const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true})
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
  