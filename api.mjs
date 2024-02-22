// import http from "node:http"; // importação do módulo HTTP do nodejs
import express from "express";

const hostname = "127.0.0.1"; // valor do ip local (127.0.0.1 ou localhost)
const port = 3000; // porta lógica de execução
const carros = [
  { modelo: "Uno", ano: "2023", cor: "vermelho", vendido: false, imagem: "" },
  { modelo: "gol", ano: "2023", cor: "branco", vendido: false, imagem: "" },
  { modelo: "ka", ano: "2023", cor: "preto", vendido: false, imagem: "" },
];

// Criação do servidor web
const app = express();
app.use(express.json()); //habilitando json no body das requisições

app.get("/", function (req, res) {
  res.send("API venda carros");
});

app.get("/carros", function (req, res) {
  res.json(carros);
});

app.post("/carros", function (req, res) {
  carros.push(req.body);
  res.send("Carro salvo com sucesso!!");
});

app.listen(port, function () {
  console.log("API iniciada");
});
