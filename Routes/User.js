const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userController");
///users/
router.get("/", userController.homePage);

///users/irene
router.get("/irene", (req, res) => {
  try {
    return res.send("Irenes Path");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;