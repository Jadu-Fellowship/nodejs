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

router.post("/:id", (req, res) => {
  // console.log(req.params)
  // console.log(req.headers);
  // console.log(req.body);
  res.json({
    id: req.params.id,
    username: "khattakdev",
  });
});

module.exports = router;
