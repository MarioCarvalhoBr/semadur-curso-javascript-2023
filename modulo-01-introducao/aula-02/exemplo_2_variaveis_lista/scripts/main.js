/*
Autor: Mário de Araújo Carvalho
Descrição: Esse código é um exemplo do uso de variáveis do tipo objeto.
Data: 27/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração de variáveis do tipo objeto: {chave: valor, chave: valor, ...}
var objeto_joao = {nome: "João", ano_nascimento: 2000, eh_estudante: true};
var objeto_maria = {nome: "Maria", ano_nascimento: 1995, eh_estudante: false};
var objeto_jose = {nome: "José", ano_nascimento: 1990, eh_estudante: true};

console.log("Teste: " + objeto_joao.idade);

var ano_atual = 2023;

// Imprimindo: A pessoa <nome> tem <idade> anos.
console.log("A pessoa " + objeto_joao.nome + " tem " + (ano_atual - objeto_joao.ano_nascimento) + " anos.");
console.log("A pessoa " + objeto_maria.nome + " tem " + (ano_atual - objeto_maria.ano_nascimento) + " anos.");
console.log("A pessoa " + objeto_jose.nome + " tem " + (ano_atual - objeto_jose.ano_nascimento) + " anos.");

objeto_joao = null;
objeto_joao = {nome: "João Marcos", ano_nascimento: 2000, eh_estudante: true};
console.log(objeto_joao);