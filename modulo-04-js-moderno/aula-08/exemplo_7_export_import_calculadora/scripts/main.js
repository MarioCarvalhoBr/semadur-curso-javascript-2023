/*
Autor: Mário de Araújo Carvalho
Descrição: Calculadora

Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Importar as funções da calculadora do arquivo matematica.js
import { soma, subtracao, multiplicacao, divisao } from "./matematica.js";

// Entrada de dados
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Botões
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

// Resultado
const resultado = document.getElementById("resultado");

// Adicionar evento de clique no botão somar
somar.addEventListener("click", () => {
    resultado.innerText = soma(Number(valor1.value), Number(valor2.value));
});

// Adicionar evento de clique no botão subtrair
subtrair.addEventListener("click", () => {
    resultado.innerText = subtracao(Number(valor1.value), Number(valor2.value));
});

// Adicionar evento de clique no botão multiplicar
multiplicar.addEventListener("click", () => {
    resultado.innerText = multiplicacao(Number(valor1.value), Number(valor2.value));
});

// Adicionar evento de clique no botão dividir
dividir.addEventListener("click", () => {
    resultado.innerText = divisao(Number(valor1.value), Number(valor2.value));
});