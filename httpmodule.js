const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }
  if (req.url === "/contact") {
    res.write("Contact Page");
    res.end();
  }
});

server.listen(3000);
