/*
Autor: Mário de Araújo Carvalho
Descrição: Esse código é um exemplo de operadores: aritméticos, comparação, lógicos e precedência
Data: 27/11/2023
E-mail: mario.carvalho@ufms.br
*/
var numero_valor_a = 4;
var numero_valor_b = 2;

// Operadores aritméticos
// Adição +
var resultado = numero_valor_a + numero_valor_b;
console.log("O resultado da soma de " + numero_valor_a + " + " + numero_valor_b + " é: " + resultado);

// Subtração -
var resultado = numero_valor_a - numero_valor_b;
console.log("O resultado da subtração de " + numero_valor_a + " - " + numero_valor_b + " é: " + resultado);

// Multiplicação *
var resultado = numero_valor_a * numero_valor_b;
console.log("O resultado da multiplicação de " + numero_valor_a + " * " + numero_valor_b + " é: " + resultado);

// Divisão /
var resultado = numero_valor_a / numero_valor_b;
console.log("O resultado da divisão de " + numero_valor_a + " / " + numero_valor_b + " é: " + resultado);

// Módulo %
var resultado = numero_valor_a % numero_valor_b;
console.log("O resultado do módulo de " + numero_valor_a + " % " + numero_valor_b + " é: " + resultado);

// Operadores de comparação
// Igual ==
var resultado = (numero_valor_a == numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " == " + numero_valor_b + " é: " + resultado);

// Diferente !=
var resultado = (numero_valor_a != numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " != " + numero_valor_b + " é: " + resultado);

// Maior que >
var resultado = (numero_valor_a > numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " > " + numero_valor_b + " é: " + resultado);

// Menor que <
var resultado = (numero_valor_a < numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " < " + numero_valor_b + " é: " + resultado);

// Maior ou igual que >=
var resultado = (numero_valor_a >= numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " >= " + numero_valor_b + " é: " + resultado);

// Menor ou igual que <=
var resultado = (numero_valor_a <= numero_valor_b);
console.log("O resultado da comparação de " + numero_valor_a + " <= " + numero_valor_b + " é: " + resultado);

// Operadores lógicos
// E &&
var resultado = ((numero_valor_a == numero_valor_b) && (numero_valor_a > numero_valor_b));
console.log("O resultado da comparação de " + numero_valor_a + " == " + numero_valor_b + " && " + numero_valor_a + " > " + numero_valor_b + " é: " + resultado);

// OU ||
var resultado = ((numero_valor_a == numero_valor_b) || (numero_valor_a > numero_valor_b));
console.log("O resultado da comparação de " + numero_valor_a + " == " + numero_valor_b + " || " + numero_valor_a + " > " + numero_valor_b + " é: " + resultado);

// NÃO !
var resultado = !((numero_valor_a == numero_valor_b));
console.log("O resultado da comparação lógica de !(" + numero_valor_a + " == " + numero_valor_b + ") é: " + resultado);

// Operadores de precedência
var resultado = (numero_valor_a + numero_valor_b) * (numero_valor_a - numero_valor_b);
console.log("O resultado da expressão de (" + numero_valor_a + " + " + numero_valor_b + ") * (" + numero_valor_a + " - " + numero_valor_b + ") é: " + resultado);

var resultado = numero_valor_a + numero_valor_b * numero_valor_a - numero_valor_b;
console.log("O resultado da expressão de " + numero_valor_a + " + " + numero_valor_b + " * " + numero_valor_a + " - " + numero_valor_b + " é: " + resultado);


// Divisão por zero
var resultado = numero_valor_a / 0;
console.log("O resultado da divisão de " + numero_valor_a + " / 0 é: " + resultado);

// Divisão de zero por zero
var resultado = 0 / 0;
console.log("O resultado da divisão de 0 / 0 é: " + resultado);

// Divisão de zero por um número
var resultado = 0 / numero_valor_a;
console.log("O resultado da divisão de 0 / " + numero_valor_a + " é: " + resultado);