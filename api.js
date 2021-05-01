const express = require("express");
const userRouter = require("./Router/user");
const app = express();

app.get("/", (req, res) => {
  res.send("GET Method");
});

app.use("/user", userRouter);

// users
// users/delete

// user/reaction/like
// user/reaction/laugh
// user/reaction/angry
// user/:id

// courses

app.listen(3000, console.log("Server Started!!!"));
