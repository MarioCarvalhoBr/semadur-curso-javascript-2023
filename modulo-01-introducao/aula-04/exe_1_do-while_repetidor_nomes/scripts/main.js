/*
Autor: Mário de Araújo Carvalho
Descrição: Repetidor de nome. O usuário digita o nome e o programa a pergunta para 
o usuario inserir o nome até que seja inserido. Use do do-while
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

var contador = 0;
do {
    contador = contador + 1;
    console.log("Executando o do-while pela " + contador + " vez");
    var nome = prompt("Digite o seu nome: ");
} while (!nome);

console.log("O nome digitado foi: " + nome);
console.log("O do-while foi executado " + contador + " vezes");