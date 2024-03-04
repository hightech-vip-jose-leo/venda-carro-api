// import http from "node:http"; // importação do módulo HTTP do nodejs
import express from "express";
import cors from "cors";

const hostname = "127.0.0.1"; // valor do ip local (127.0.0.1 ou localhost)
const port = 3000; // porta lógica de execução
const carros = []; 
let idAtual = 0;

// Criação do servidor web
const app = express();
app.use(cors()); // habilitando CORS
app.use(express.json()); //habilitando json no body das requisições

app.get("/", function (req, res) {
  res.send("API venda carros");
});

// GET busca carros cadastrados
app.get("/carros", function (req, res) {
  res.json(carros);
});

// POST cadastra novo carro
app.post("/carros", function (req, res) {
  const novoCarro = req.body;
  novoCarro.id = idAtual++;
  carros.push(novoCarro);
  res.send("Carro salvo com sucesso!!");
});

// PUT atualiza carro já cadastrado
app.put("/carros", function (req, res) {
  const carroAtualizado = req.body;
  const i = carros.findIndex(function(carroDaVez) {
    return carroDaVez.id == carroAtualizado.id
  });
  carros[i] = carroAtualizado;
  res.send("Carro atualizado com sucesso!!");
})

// DELETE remove carro já cadastrado
app.delete("/carros/:id", function(req, res) {
  const id = req.params.id;
  // validar id de carro inválido
  const i = carros.findIndex(function(carroDaVez) {
    return carroDaVez.id == id;
  });

  if(i > -1) {
    carros.splice(i, 1);
    res.send(`Carro id: ${id} removido com sucesso!!`);
  } else {
    res.status(400).send(`Carro de id: ${id} não foi encontrado`);
  }
})

app.listen(port, function () {
  console.log("API iniciada");
});
