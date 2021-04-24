#!/usr/bin/env node

const readline = require("readline");
const axios = require("axios");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is GitHub Handle?", async function (answer) {
  const res = await axios.get(`https://api.github.com/users/${answer}`);

  const {
    data: { name, company, location, bio },
  } = res;

  console.log("Name: ", name);
  console.log("Company: ", company);
  console.log("Location: ", location);
  console.log("Bio: ", bio);

  rl.close();
});
