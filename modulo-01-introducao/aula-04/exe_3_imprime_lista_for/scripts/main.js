/*
Autor: Mário de Araújo Carvalho
Descrição: Imprimir os valores de uma lista de frutas
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
var tamanho_lista = frutas.length;

/*
console.log("A lista de frutas é: ");
console.log(frutas);

console.log("O primeiro elemento da lista é: " + frutas[0]);
console.log("O segundo elemento da lista é: " + frutas[1]);
console.log("O terceiro elemento da lista é: " + frutas[2]);
console.log("O quarto elemento da lista é: " + frutas[3]);
console.log("O quinto elemento da lista é: " + frutas[4]);
console.log("O sexto elemento da lista é: " + frutas[5]); // Erro de execução pois não existe o sexto elemento
*/
// Tamanho da lista
console.log("O tamanho da lista é: " + frutas.length);

// Processamento
for (let i = 0; i < tamanho_lista; i++) {
    console.log("O " + (i + 1) + "º elemento da lista é: " + frutas[i]);
    // Imprimir usando {}
    // console.log(`O ${i + 1}º elemento da lista é: ${frutas[i]}`);
}