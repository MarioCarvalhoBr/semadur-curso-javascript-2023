/*
Autor: Mário de Araújo Carvalho
Descrição: Exemplo de JSON com API e fetch
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Consultar https://dummyjson.com/products e imprimir no console o resultado

fetch('https://dummyjson.com/products')
   
    .then(resposta => { // 1 - then: tenta fazer a requisição
        let dadosJSON = resposta.json();
        return dadosJSON;
    }).then(dadosJSON => { // 2 - then: retorna a resposta
        // console.log(dadosJSON);
        let primeiroProduto = dadosJSON.products[0];
        console.log(primeiroProduto);
        // Nome
        console.log(primeiroProduto.title);
    });


    // 1 º then ele tenta fazer a requisição: Promise {<pending>}
    // 2 º then ele retorna a resposta: Promise {<fulfilled>: Response}