const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/user") {
    if (req.method == "GET") {
      res.write("<h1>User Fetched!!</h1>");
    } else if (req.method == "POST") {
      res.write("<h1>User Created!!</h1>");
    } else if (req.method == "DELETE") {
      res.write("<h1>User Deleted!!!</h1>");
    }
    res.end();
  } else if (req.url == "/course") {
    if (req.method == "GET") {
      res.write("<h1>Course Fetched!!</h1>");
    } else if (req.method == "POST") {
      res.write("<h1>Course Created!!</h1>");
    } else if (req.method == "DELETE") {
      res.write("<h1>Course Deleted!!!</h1>");
    }
    res.end();
  }
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(400);
        res.write("Error: Something unexpected!");
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(3000, console.log("Server Started!..."));
