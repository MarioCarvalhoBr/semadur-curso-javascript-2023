/*
Autor: Mário de Araújo Carvalho
Descrição: Acumuando valores com while de 0 a 100.
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada de dados
var numero = 0;
var soma = 0;

// Processamento e Saída
while (numero <= 100000) {
    soma = soma + numero;
    // soma += numero;
    numero++;
}

console.log("A soma dos números de 0 a 100000 é: " + soma);