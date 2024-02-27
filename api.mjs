// import http from "node:http"; // importação do módulo HTTP do nodejs
import express from "express";
import cors from "cors";

const hostname = "127.0.0.1"; // valor do ip local (127.0.0.1 ou localhost)
const port = 3000; // porta lógica de execução
const carros = [
  {
    id: 1,
    modelo: "Uno",
    ano: "2023",
    cor: "vermelho",
    placa: "OON7895",
    vendido: false,
    imagem:
      "https://cdn.motor1.com/images/mgl/2NO4RB/s1/visual-do-fiat-uno-ciao-traz-detalhes-na-lateral.webp",
  },
  {
    id: 2,
    modelo: "gol",
    ano: "2023",
    cor: "branco",
    placa: "XXX2024",
    vendido: false,
    imagem: "",
  },
  {
    id: 3,
    modelo: "ka",
    ano: "2023",
    cor: "preto",
    placa: "YYY2020",
    vendido: false,
    imagem: "",
  },
];

// Criação do servidor web
const app = express();
app.use(cors()); // habilitando CORS
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
