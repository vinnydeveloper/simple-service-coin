const fs = require("fs");
const url = require("url");
const http = require("http");

const listCoins = require("./moedas.json");

const server = http.createServer((req, res) => {
  const route = url.parse(req.url);

  switch (route.pathname) {
    case "/moedas":
      res.setHeader("Content-Type", "text/html");
      res.write(JSON.stringify(listCoins));
      break;
    default:
      const page = fs.readFileSync("pagina.html");
      res.write(page);
      break;
  }

  return res.end();
});

server.listen(4000);
