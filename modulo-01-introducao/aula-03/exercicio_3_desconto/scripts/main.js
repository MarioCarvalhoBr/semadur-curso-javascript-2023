/*
Autor: Mário de Araújo Carvalho
Descrição: Desconto de 10% para maiores de idade
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var idade = prompt("Digite sua idade: ");
console.log("Sua idade é: " + idade);

var valor_produto = prompt("Digite o valor do produto: ");
console.log("O valor inicial do produto é: " + valor_produto);

// Processamento
if (idade >= 60) {
    // Aplicar 10% de desconto
    var valor_final = valor_produto - (valor_produto * 0.1);
    console.log("O valor final do produto é: " + valor_final);
} else {
    console.log("Não tem direito a desconto!");
    console.log("O valor final do produto é: " + valor_produto);
}