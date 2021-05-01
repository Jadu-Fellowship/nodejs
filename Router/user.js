const express = require("express");
const router = express.Router();

router.post("/reaction/angry", (req, res) => {
  res.send("Angry Reacted");
});

router.post("/reaction/laugh", (req, res) => {
  res.send("laugh Reacted");
});

router.post("/reaction/like", (req, res) => {
  res.send("like Reacted");
});

router.get("/:id", (req, res) => {
  res.json({
    username: "khattakdev",
  });
});

module.exports = router;
