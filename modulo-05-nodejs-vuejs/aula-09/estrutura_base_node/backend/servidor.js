/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o módulo http
const http = require('http');
const url = require('url');
const fs = require('fs');
const funcoes = require('./funcoes');

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

// Criando um servidor
const servidor = http.createServer((req, res) => {

    // Verificar se a url acessada é /arquivo
    const urlParse = url.parse(req.url, true);
    console.log(`Consultando a url ${urlParse.pathname}`);

    const rota = urlParse.pathname;
    
    if (rota == "/index"){
        res.end('<h1>Seja bem vindo ao index</h1>');
    }else{
        res.end('{}');
    }
});

// Iniciando o servidor e colocar pra escutar na porta 3000
servidor.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});