/*
Autor: Mário de Araújo Carvalho
Descrição: Cálculo do IMC usando switch
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada: peso e altura
/*
var peso = parseFloat(prompt("Digite o seu peso: "));
var altura = parseFloat(prompt("Digite a sua altura: "));
var idade = parseInt(prompt("Digite a sua idade: "));
*/
// Ou pode ser feito assim:
var peso = prompt("Digite o seu peso: ");
var altura = prompt("Digite a sua altura: ");
var idade = prompt("Digite a sua idade: ");

idade = parseInt(idade)
peso = parseFloat(peso); // Converte a variável peso para float
altura = parseFloat(altura); // Converte a variável altura para float


// Imprimessão do tipo da variável peso typeof(variavel)
console.log("Tipo da variável peso: " + typeof(peso));
console.log("Tipo da variável altura: " + typeof(altura));

var imc = 0;

// Processamento: cálculo do IMC = peso / (altura * altura)
imc = peso / (altura * altura);

// Saída: IMC
console.log("Seu IMC é: " + imc);

// Saída: classificação do IMC
switch (true) {
    case (imc < 18.5):
        console.log("Você está abaixo do peso!");
        break;
    case (imc >= 18.5 && imc < 25):
        console.log("Você está com o peso ideal do IMC!");
        break;
    case (imc >= 25 && imc < 30):
        console.log("Você está com sobrepeso!");
        break;
    case (imc >= 30 && imc < 35):
        console.log("Você está com obesidade grau I!");
        break;
    case (imc >= 35 && imc < 40):
        console.log("Você está com obesidade grau II!");
        break;
    case (imc >= 40):
        console.log("Você está com obesidade grau III!");
        break;
    default:
        console.log("Valor inválido!");
        break;
}