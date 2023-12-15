/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o módulo http
const http = require('http');
const url = require('url');
const matematica = require('./matematica');

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

// Criando um servidor
const servidor = http.createServer((req, res) => {

    // /a=1&b=2
    const urlParse = url.parse(req.url, true);
    let a = urlParse.query.a;
    let b = urlParse.query.b;
    // Converter para number
    a = Number(a);
    b = Number(b);
    console.log(`a = ${a} e b = ${b}`);

    const soma = matematica.soma(a, b);
   
    // Configurando o cabeçalho da resposta
    res.end(`<h1>A soma de ${a} + ${b} = ${soma}</h1>`);
});

// Iniciando o servidor e colocar pra escutar na porta 3000
servidor.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});