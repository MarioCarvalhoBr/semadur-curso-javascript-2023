// Import Pool, Client
const { Pool } = require("pg");

/*
Diferença entre Pool e Client: 
Pool: é uma conexão que fica aberta para ser usada por outros usuários
Client: é uma conexão que fica aberta para ser usada por um único usuário
*/

const pool = new Pool({
  user: "admin",
  host: "127.0.0.1",
  database: "biblioteca_db",
  password: "admin123",
  port: 5432,
});


function getLivros(callback) {
  pool.query("SELECT * FROM livro", (err, res) => {
    callback(err, res);
  });
}

function getAutores(callback) {
  pool.query("SELECT * FROM autor", (err, res) => {
    callback(err, res);
  });
}

// Inserir livro: codigo, titulo
function inserirLivro(codigo, titulo, callback) {
  pool.query(
    "INSERT INTO livro (codigo, titulo) VALUES ($1, $2)",
    [codigo, titulo],
    (err, res) => {
      callback(err, res);
    }
  );
}

// Deletar livro: codigo
function deletarLivro(codigo, callback) {
  pool.query("DELETE FROM livro WHERE codigo = $1", [codigo], (err, res) => {
    callback(err, res);
  });
}

// Atualizar livro: codigo, titulo
function atualizarLivro(codigo, titulo, callback) {
  pool.query(
    "UPDATE livro SET titulo = $1 WHERE codigo = $2",
    [titulo, codigo],
    (err, res) => {
      callback(err, res);
    }
  );
}

// Buscar por codigo: codigo
function buscarPorCodigo(codigo, callback) {
  pool.query("SELECT * FROM livro WHERE codigo = $1", [codigo], (err, res) => {
    callback(err, res);
  });
}

// Export pool
module.exports = {
  getLivros,
  getAutores,
  inserirLivro,
  deletarLivro,
  atualizarLivro,
  buscarPorCodigo,
  
}