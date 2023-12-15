/*
Autor: Mário de Araújo Carvalho
Descrição: Calculadora usando o switch case. Ler dois números e a operação matemática a ser realizada (+, -, * ou /) e imprimir o resultado.
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var numero1 = parseInt(prompt("Digite o primeiro número: "));
var numero2 = parseInt(prompt("Digite o segundo número: "));
var operacao = prompt("Digite a operação (+, -, * ou /): ");

// Processamento
switch (operacao) {
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case "/":
        // Tratar  o caso de divisão por zero
        if (numero2 == 0) {
            console.log("Não é possível dividir por zero");
        } else {
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        }
        break;
    default:
        console.log("Operação inválida");
        break;
}