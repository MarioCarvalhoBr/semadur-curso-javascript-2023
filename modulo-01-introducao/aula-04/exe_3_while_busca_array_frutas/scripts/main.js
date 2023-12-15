/*
Autor: Mário de Araújo Carvalho
Descrição: Busca em array de frutas.
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada de dados
var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Melão', 'Melancia', 'Abacaxi', 'Mamão', 'Pera', 'Laranja'];
var fruta_procurada = prompt('Digite uma fruta: ');

// Processamento e Saída
var posicao = 0;
var tamanho_lista = lista_frutas.length;

var achou = false;

while (posicao < tamanho_lista) {
    let fruta_atual = lista_frutas[posicao];
    if (fruta_atual == fruta_procurada) {
        alert('Fruta encontrada na posição ' + posicao);
        achou = true;
        break;
    }
    posicao++;
}

if (achou == false) {
    alert('Fruta não encontrada');
}