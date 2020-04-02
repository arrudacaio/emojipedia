const express = require("express");

const server = express();

server.use(express.json());

// Query Params =  ?teste=Diego
// Route Params = users/1
// Request body = {"name":"diego"}

const users = ["Claudio", "Diego", "Caio"];

//Middleware global
server.use((req, res, next) => {
  console.log("A requisição foi chamada");
  return next();
});

//Criando um middleware local
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.send(400).json({
      error: "User name is required"
    });
  }
  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.send(400).json({
      error: "User doesnt exists"
    });
  }
  return next();
}

// Listar todos
server.get("/users", (req, res) => {
  return res.json(users);
});

//Listando um usuário específico

server.get("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  return res.json({
    message: `Buscando o usuário ${users[index]}`
  });
});

// Criando usuários
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  return res.json(users);
});

//Editar usuários
server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

// Delete
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);
