const path = require("path");
const fs = require("fs");

const rootFolder = path.join(__dirname, "test");
// Folder
// fs.mkdir(rootFolder, (err) => {
//   if (err) {
//     return console.log("Something unexpected Happened!");
//   }

//   console.log("Folder Created!");
// });

// File
// fs.writeFile(
//   path.join(rootFolder, "index.js"),
//   "console.log('hello')",
//   (err) => {
//     if (err) {
//       return console.log("Something unexpected Happened!");
//     }

//     console.log("File Created!");
//   }
// );

// fs.readFile(path.join(rootFolder, "index.js"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return console.log("Something unexpected");
//   }
//   console.log(data);
// });

// fs.unlink(path.join(rootFolder, "index.js"), (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("File removed");
// });

// fs.rmdir(rootFolder, (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("Folder removed");
// });

fs.readdir(__dirname, "utf-8", (err, files) => {
  console.log(files);
});
