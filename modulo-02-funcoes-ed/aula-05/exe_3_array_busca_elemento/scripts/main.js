/*
Autor: Mário de Araújo Carvalho
Descrição:  Busca de Elemento: Escreva uma função que busca um elemento
em um array e retorna sua posição.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração da função
function buscaElemento(lista, elemento){
    let posicao = -1;
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == elemento){
            posicao = i;
            break;
        }
    }
    return posicao;
}

// Entrada
let lista_numeros = [1, 2, 33, 9, 5, 6, 2, 1, 0, 3];
let elemento = 9;

// Processamento
let posicao = buscaElemento(lista_numeros, elemento);

// Saída
console.log("Lista de Números: " + lista_numeros);
console.log("Elemento: " + elemento);
if (posicao == -1){
    console.log("Elemento não encontrado!");
} else{
    console.log("Posição do Elemento: " + posicao);
}

console.log("--------------------------------------------------");
// Resolvendo usando o findIndex()
// Entrada
lista_numeros = [1, 2, 33, 9, 5, 6, 2, 1, 0, 3];
elemento = 9;

// Processamento
posicao = lista_numeros.findIndex(elemento => elemento == 9);

// Saída
console.log("Lista de Números: " + lista_numeros);
console.log("Elemento: " + elemento);
if (posicao == -1){
    console.log("Elemento não encontrado!");
}else{
    console.log("Posição do Elemento: " + posicao);
}