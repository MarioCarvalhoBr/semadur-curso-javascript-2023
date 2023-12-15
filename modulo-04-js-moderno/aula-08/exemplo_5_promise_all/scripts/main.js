/*
Autor: Mário de Araújo Carvalho
Descrição: Manipulação de Múltiplas Promises: Use Promise.all para lidar com várias Promises simultaneamente.


Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Criar uma promise para baixar: https://jsonplaceholder.typicode.com/users
const promise_1 = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resposta) => {
            resolve(resposta.json());
        })
        .catch((erro) => {
            reject(erro);
        });
});

// Criar uma promise para baixar: https://dummyjson.com/products
const promise_2 = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
        .then((resposta) => {
            resolve(resposta.json());
        })
        .catch((erro) => {
            reject(erro);
        });
});

// Criar uma lista de promises
const lista_promises = [promise_1, promise_2];

// Utilizar Promise.all para baixar as duas promises simultaneamente
Promise.all(lista_promises)
    .then((resposta) => {
        // Desempacotar a resposta
        const [usuarios, produtos] = resposta;

        console.log(`Usuários: ${JSON.stringify(usuarios)}`);
        console.log(`Produtos: ${JSON.stringify(produtos)}`);
    })
    .catch((erro) => {
        console.log(erro);
    });