/*
Autor: Mário de Araújo Carvalho
Descrição: Função de Saudação: Escreva uma função que aceite um nome
como parâmetro e retorne uma saudação personalizada.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração da função
function saudacao(nome){
    return "Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!";
}

// Entrada 
let nome = prompt("Digite o seu nome: ");

// Processamento
let resultado = saudacao(nome);

// Saída
console.log(resultado); // "Olá, Mário! Seja bem-vindo(a) ao curso de JavaScript!

