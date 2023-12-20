/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o módulo http
const http = require('http');

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

// Criando um servidor
const servidor = http.createServer((req, res) => {
    // Imprimir no console o endereço acessado
    console.log(req.url);
    // Configurando o cabeçalho da resposta
    res.end('<h1>Olá mundo</h1>');
});

// Iniciando o servidor e colocar pra escutar na porta 3000
servidor.listen(PORTA, IP, () => {
    console.log(`Olá, Servidor rodando em http://${IP}:${PORTA}`);
});