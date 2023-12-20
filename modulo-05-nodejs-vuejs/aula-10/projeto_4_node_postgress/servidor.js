/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http usando express
Data: 20/12/2023
E-mail: mario.carvalho@ufms.br
*/
// Bibliotecas
const express = require('express');
const { listar, inserir, buscarPorId, atualizar, excluir } = require('./banco');
const cors = require('cors');

listar().then(usuarios => console.log(usuarios));
inserir({ nome: 'Mário', email: 'mario', idade: 30, endereco: 'Rua 1', profissao: 'Professor' }).then(usuario => console.log(usuario));
buscarPorId(1).then(usuario => console.log(usuario));
atualizar(1, { nome: 'Mário de Araújo Carvalho', email: 'mario', idade: 30, endereco: 'Rua 1', profissao: 'Professor' }).then(usuario => console.log(usuario));
excluir(1).then(usuario => console.log(usuario));

// Instanciando o express
const app = express();

// MIDDLEWARES
// Configurando o cors
app.use(cors());
// Configurando o express para receber dados em json
app.use(express.json());

// CONFIGURAÇÕES
const PORTA = 3000;
const IP = 'localhost';

// Rota padrão /
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.get('/usuarios', (req, res) => {
    listar().then(usuarios => res.json(usuarios));
});

app.get('/usuarios/:id', (req, res) => {
    buscarPorId(req.params.id).then(usuario => res.json(usuario));
});


app.post('/usuarios', (req, res) => {
    // const { nome, email, idade, endereco, profissao } = req.body; // Exe: { nome: 'Mário', email: 'mario', idade: 30, endereco: 'Rua 1', profissao: 'Professor'}
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const endereco = req.body.endereco;
    const profissao = req.body.profissao;
   
    inserir({ nome, email, idade, endereco, profissao }).then(usuario => res.json(usuario));
});

app.put('/usuarios/:id', (req, res) => {
    const { nome, email, idade, endereco, profissao } = req.body;
    atualizar(req.params.id, { nome, email, idade, endereco, profissao }).then(usuario => res.json(usuario));
});

app.delete('/usuarios/:id', (req, res) => {
    excluir(req.params.id).then(usuario => res.json(usuario));
});

// Ouvidor
app.listen(PORTA, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORTA}`);
});
