const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }

  if (req.url === "/about") {
    res.end("About page");
    return;
  }

  res.end(`<p>We cant find the page your are looking for</p>`);
});

server.listen(5000);
