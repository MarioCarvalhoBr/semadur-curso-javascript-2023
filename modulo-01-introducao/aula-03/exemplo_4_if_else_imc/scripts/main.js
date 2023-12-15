/*
Autor: Mário de Araújo Carvalho
Descrição: Cálculo do IMC usando if else
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada: peso e altura
var peso = prompt("Digite o seu peso: ");
var altura = prompt("Digite a sua altura: ");
var imc = 0;

// Processamento: cálculo do IMC = peso / (altura * altura)
imc = peso / (altura * altura);

// Saída: IMC
console.log("Seu IMC é: " + imc);

// Saída: classificação do IMC usando if else
if (imc < 18.5) {
    console.log("Você está abaixo do peso!");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com o peso ideal do IMC!");
} else if (imc >= 25 && imc < 30) {
    console.log("Você está com sobrepeso!");
} else if (imc >= 30 && imc < 35) {
    console.log("Você está com obesidade grau I!");
} else if (imc >= 35 && imc < 40) {
    console.log("Você está com obesidade grau II!");
} else if (imc >= 40) {
    console.log("Você está com obesidade grau III!");
}