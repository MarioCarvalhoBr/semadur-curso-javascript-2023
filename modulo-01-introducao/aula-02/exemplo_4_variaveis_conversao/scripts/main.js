/*
Autor: Mário de Araújo Carvalho
Descrição: Esse código é um exemplo do de conversão explícita e implícita de variáveis
Data: 27/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Conversão implícita
var numero = 456;
var texto = "56";

var soma = numero + texto;
console.log(soma); // 45656

// Conversão explícita
var numero = 456;
var texto = "56";

var soma = numero + Number(texto);
console.log(soma); // 512

// Conversão explícita parseInt()
var numero = 456;
var texto = "56";

var soma = numero + parseInt(texto);
console.log(soma); // 512

// Conversão explícita parseFloat()
var numero = 456;
var texto = "56.78";

var soma = numero + parseFloat(texto);
console.log(soma); // 512.78

//Exemplo de int com float
var numero = 456;
var texto = "56.78";

var soma = numero + parseInt(texto);
console.log(soma); // 512