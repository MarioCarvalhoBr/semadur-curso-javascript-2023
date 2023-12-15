/*
Autor: Mário de Araújo Carvalho
Descrição: Contador. Imprime de 1 a 10, e interrompe a execução se o número for 5.
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada de dados
var contador = 1;

// Processamento e Saída
while (contador <= 10) {
    if (contador == 5) {
        break;
    }
    console.log(contador);
    contador++;
}
console.log('-------------------');
// Outra dorma de fazer o mesmo exercício
// Enquanto o contador for diferente de 5, ele vai imprimir o contador
var contador_2 = 1;
while (contador_2 != 5) {
    console.log(contador_2);
    contador_2++;
}