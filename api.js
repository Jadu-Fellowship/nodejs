const express = require("express");
const userRouter = require("./Router/user");
const mainRouter = require("./Router/main");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());

app.use("/", mainRouter);
app.use("/user", userRouter);

// users
// users/delete

// user/reaction/like
// user/reaction/laugh
// user/reaction/angry
// user/:id

// courses

app.listen(3000, console.log("Server Started!!!"));
