/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http: Leitura de Arquivos: Use o módulo fs para ler um arquivo de texto e exibi-lo no console.
Sempre que o cliente acessar o endereço /arquivo, o servidor deve ler o arquivo usuarios.json e exibi-lo na tela do cliente com o formato JSON.
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Importando o módulo http
const http = require('http');
const url = require('url');
const fs = require('fs');

// CONFIGURAÇÃO DO SERVIDOR
const PORTA = 3000;
const IP = 'localhost';

// Criando um servidor
const servidor = http.createServer((req, res) => {

    // Verificar se a url acessada é /arquivo
    const urlParse = url.parse(req.url, true);
    console.log(`Consultando a url ${urlParse.pathname}`);

    const rota = urlParse.pathname;

    if (rota == '/usuarios') {
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
    
    
    }else if (rota == "/index"){
        // Ler o arquivo index.html e exibir na tela
        fs.readFile('./index.html', (err, dados) => {
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