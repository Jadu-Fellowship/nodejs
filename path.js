// Import

const path = require("path");
// const printSomething = require("./async");
// Reserved Keyword
// console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.dirname(__dirname));

console.log(path.join("/nodejs", "/paths", "index.js"));

console.log(path.extname("index.html"));
console.log(path.extname(__filename));
