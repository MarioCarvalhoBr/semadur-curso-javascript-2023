/*
Autor: Mário de Araújo Carvalho
Descrição: Função Assíncrona com await: Crie uma função async que utiliza await para esperar uma Promise.
Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Criar uma função assíncrona
async function funcao_assincrona() {
    // Utilizar await para esperar uma Promise
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    console.log(dados);
    return dados;
}

// Chamar a função
funcao_assincrona()
    .then((dados) => {
        console.log(dados);
    }
    ).catch((erro) => {
        console.log(erro);
    });