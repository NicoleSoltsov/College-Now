const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
require("./DB/mongoose");
const routes = require("./routes/index");
const bcrypt = require("bcryptjs");
const password = "irene";
const saltRounds = 8;
bcrypt.hash(password, saltRounds, (err,hashedPassword) => {
  console.log(hashedPassword);
});
//routes imported from routes folder
app.use(express.json());
//app.use(express.urlencoded());
//global middleware
/* app.use((req, res, next) => {
  console.log(req.body);
  next();
}); */
app.use("/", routes);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
