/*
Autor: Mário de Araújo Carvalho
Descrição: Jogo adivinhar número.
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

var numero_secreto = parseInt(Math.random() * 10); // Math.random() gera um número aleatório entre 0 e 1
// var numero_secreto = 7;

do {
    var chute = parseInt(prompt("Digite um número entre 0 e 10: "));
} while (chute != numero_secreto);

console.log("Parabéns, você acertou o número secreto: " + numero_secreto);