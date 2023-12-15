/*
Autor: Mário de Araújo Carvalho
Descrição: Criar e Consumir uma Promise: Implemente uma Promise simples e consuma-a com then e catch.
Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Criar uma Promise
const promessa = new Promise((resolve, reject) => {
    // Função que será executada quando a Promise for criada
    // resolve: função que será chamada quando a Promise for resolvida
    // reject: função que será chamada quando a Promise for rejeitada

    resolve("Promise resolvida");
    // reject("Promise rejeitada");
});

// Consumir a Promise
promessa
    .then((resposta) => {
        // Função que será executada quando a Promise for resolvida
        console.log(`Resposta: ${resposta}`);
    })
    .catch((erro) => {
        // Função que será executada quando a Promise for rejeitada
        console.log(`Erro: ${erro}`);
    });


// Exemplo com setTimeout
const promessa_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolvida após 5 segundos");
    }, 5000);
});

promessa_2
    .then((resposta) => {
        console.log(`Resposta: ${resposta}`);
    })
    .catch((erro) => {
        console.log(`Erro: ${erro}`);
    });

// Exemplo com fetch
const promessa_3 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resposta) => {
            resolve(resposta.json());
        })
        .catch((erro) => {
            reject(erro);
        });
})

promessa_3
    .then((resposta) => {
        console.log(resposta);
    })
    .catch((erro) => {
        console.log(erro);
    });

// Exemplo com fetch e arrow function
const promessa_4 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resposta) => resolve(resposta.json()))
        .catch((erro) => reject(erro));
})

promessa_4
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.log(erro));

// Exemplo com fetch, arrow function e async/await
const promessa_5 = new Promise(async (resolve, reject) => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    resolve(resposta.json());
})

promessa_5
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.log(erro));