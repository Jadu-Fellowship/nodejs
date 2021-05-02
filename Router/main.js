const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/index");
});

router.get("/about", (req, res) => {
  res.render("../views/about");
});

router.get("/contact", (req, res) => {
  res.render("../views/contact");
});

module.exports = router;
