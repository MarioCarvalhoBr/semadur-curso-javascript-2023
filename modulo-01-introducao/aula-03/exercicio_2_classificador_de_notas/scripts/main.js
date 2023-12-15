/*
Autor: Mário de Araújo Carvalho
Descrição: Classificador de notas
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var nome = prompt("Digite o nome do aluno: ");
console.log("Nome do aluno: " + nome);

var nota = prompt("Digite a nota do aluno: ");
console.log("Nota do aluno: " + nota);

// Processamento
if (nota >= 90 && nota <= 100) {
    // Saída
    console.log("Conceito A");
} else if (nota >= 80 && nota <= 89) {
    // Saída
    console.log("Conceito B");
} else if (nota >= 70 && nota <= 79) {
    // Saída
    console.log("Conceito C");
}else if (nota >= 0 && nota <= 69) {
    // Saída
    console.log("Conceito D");
} else{
    // Saída
    console.log("Nota inválida");
}