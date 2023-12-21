// Import client, Client
const { Client } = require("pg");

/*
Diferença entre client e Client: 
client: é uma conexão que fica aberta para ser usada por outros usuários
Client: é uma conexão que fica aberta para ser usada por um único usuário

  getLivros,
  getAutores,
  inserirLivro,
  deletarLivro,
  atualizarLivro,
  buscarPorCodigo,
*/

const client = new Client({
  user: "admin",
  host: "127.0.0.1",
  database: "biblioteca_db",
  password: "admin123",
  port: 5432,
});


function getLivros(callback) {
  client.query("SELECT * FROM livro", (err, res) => {
    callback(err, res);
  });
}

function getAutores(callback) {
  client.query("SELECT * FROM autor", (err, res) => {
    callback(err, res);
  });
}

// Inserir livro: codigo, titulo
function inserirLivro(codigo, titulo, callback) {
  client.query(
    "INSERT INTO livro (codigo, titulo) VALUES ($1, $2)",
    [codigo, titulo],
    (err, res) => {
      callback(err, res);
    }
  );
}

// Deletar livro: codigo
function deletarLivro(codigo, callback) {
  client.query("DELETE FROM livro WHERE codigo = $1", [codigo], (err, res) => {
    callback(err, res);
  });
}

// Atualizar livro: codigo, titulo
function atualizarLivro(codigo, titulo, callback) {
  client.query(
    "UPDATE livro SET titulo = $1 WHERE codigo = $2",
    [titulo, codigo],
    (err, res) => {
      callback(err, res);
    }
  );
}

// Buscar por codigo: codigo
function buscarPorCodigo(codigo, callback) {
  client.query("SELECT * FROM livro WHERE codigo = $1", [codigo], (err, res) => {
    callback(err, res);
  });
}

// Export client
module.exports = {
  getLivros,
  getAutores,
  inserirLivro,
  deletarLivro,
  atualizarLivro,
  buscarPorCodigo,
  
}