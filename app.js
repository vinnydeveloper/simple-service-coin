const fs = require("fs");
const http = require("http");

const listCoins = require("./moedas.json");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(JSON.stringify(listCoins));

  return res.end();
});

server.listen(4000);
