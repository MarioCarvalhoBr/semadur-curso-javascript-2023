/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http usando express
Data: 20/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o express: O express é um framework para o nodejs que facilita a criação de servidores http
const express = require('express');

// Criando uma instância do express para criar o servidor
const app = express();

// Configurando o express para receber dados em formato json
app.use(express.json());

// Middleware: Função que é executada antes de uma rota
// Middleware: É útil para fazer validações, tratamento de erros, verificar se o usuário está logado, etc.
app.use((req, res, next) => {
    // Imprimir no console o método e a url da requisição
    console.log(`Executando Middleware: ${req.method} ${req.url}`);
    next();
});

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

const usuarios = [
    {id: 1, nome: 'Mário'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'João'},
    {id: 4, nome: 'José'},
];

// Criando uma rota para o servidor
// A rota '/' é a rota raiz do servidor
// req: requisição
// res: resposta
app.get('/', (req, res) => {
    res.send('<h1>Olá mundo!</h1>');
});

// Criando uma rota para o servidor: /usuarios
app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

// Criando uma rota para o servidor: /usuarios/:id
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            res.send(usuarios[i]);
            return;
        }
    }

    res.send({erro: 'Usuário não encontrado'});
});

// Delete: /usuarios/:id
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            usuarios.splice(i, 1);
            res.send({mensagem: 'Usuário removido com sucesso'});
            return;
        }
    }

    res.send({erro: 'Usuário não encontrado'});
});

// Post: /usuarios
app.post('/usuarios', (req, res) => {
    // Recebe um dado com formulario 
    const usuario = req.body;
    const id = usuarios.length + 1;
    usuario.id = id;
    usuarios.push(usuario);
    res.send({mensagem: 'Usuário adicionado com sucesso'});
});

// Put: /usuarios/:id
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    console.log(usuario);

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            usuarios[i] = usuario;
            res.send({mensagem: 'Usuário alterado com sucesso'});
            return;
        }
    }

    res.send({erro: 'Usuário não encontrado'});
});

// Colocando o servidor para escutar na porta 3000
// Iniciando o servidor e colocar pra escutar na porta 3000
app.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});