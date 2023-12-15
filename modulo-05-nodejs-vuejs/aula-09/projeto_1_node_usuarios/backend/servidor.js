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

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

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
        // Configurando o cabeçalho da resposta com charset UTF-8
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end('<h1>Olá, você está na rota /index</h1>');
    }else if (rota == "/usuarios"){
        // Set charset UTF-8 com json
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
            'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
            'Access-Control-Max-Age': 2592000, // 30 days
        });
        // Ler o arquivo usuarios.json
        fs.readFile('./usuarios.json', (err, dados) => {
            if (err) {
                console.log(err);
                res.end('<h1>Erro ao ler o arquivo</h1>');
            } else {
                console.log(dados.toString());
                res.end(dados.toString());
            }
        });
    }else{
        res.end('{}');
    }
});

// Iniciando o servidor e colocar pra escutar na porta 3000
servidor.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});