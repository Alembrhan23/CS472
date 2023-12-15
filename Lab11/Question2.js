// importing the necessary modules
const http = require("http");
const path = require("path");
const fs = require("fs");

// creaing the server
const server = http.createServer((req, res) => {
  // Creaing the routes
  if (req.url === "/home") {
    res.end("Welcome to my website");
  } else if (req.url === "/image") {
    res.setHeader("Content-type", "image/jpg");
    const image = fs.readFileSync(path.join(__dirname, "img", "web.jpg"));
    res.end(image);
  } else if (req.url === "/text") {
    res.setHeader("Content-type", "text/plain");
    const text = fs.readFileSync(path.join(__dirname, "file", "mytext.txt"));
    res.end(text);
  } else if (req.url === "/pdf") {
    res.setHeader("Content-type", "application/pdf");
    const pdf = fs.readFileSync(path.join(__dirname, "file", "myfile.pdf"));
    res.end(pdf);
  } else {
    res.setHeader("Content-type", "text/html");
    const err = fs.readFileSync(path.join(__dirname, "404.html"));
    res.end(err);
  }
});
// booting up the server
server.listen(3000, () => console.log("Server has started on 3000"));
