const express = require("express");
const path = require("path");

const listaMoedas = require("./moedas.json");

const serv = express();

serv.get("/moedas", (req, res) => {
  return res.json(listaMoedas);
});

serv.get("/", (req, res) => {
  return res.sendFile(path.resolve("pagina.html"));
});

serv.listen(4000);
