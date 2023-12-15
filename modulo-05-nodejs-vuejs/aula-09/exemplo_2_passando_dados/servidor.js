/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o módulo http
const http = require('http');
const url = require('url');

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

// Criando um servidor
const servidor = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    console.log(`Consultando a url ${urlParse.pathname}`);

    let parametos = urlParse.query;
    console.log(parametos);

    // Setar charset para utf-8
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    // Configurando o cabeçalho da resposta
    res.end(`<h1>Parametros recebidos: ${JSON.stringify(parametos)}</h1>`);
});

// Iniciando o servidor e colocar pra escutar na porta 3000
servidor.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});