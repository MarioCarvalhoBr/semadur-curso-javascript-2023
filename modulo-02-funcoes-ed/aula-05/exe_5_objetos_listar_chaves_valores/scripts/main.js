/*
Autor: Mário de Araújo Carvalho
Descrição:  Listar Chaves e Valores: Escreva uma função que lista todas as
chaves e valores de um objeto.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração da função
function listarChavesValores(objeto){
    let chaves = Object.keys(objeto);
    let valores = Object.values(objeto);

    let resultado = "";
    for(let i = 0; i < chaves.length; i++){
        resultado += chaves[i] + ": " + valores[i] + "\n";
    }
    return resultado;
}

// Declaração da com entries
function listarChavesValores2(objeto){
    let resultado = "";
    let entradas = Object.entries(objeto);
    for(let i = 0; i < entradas.length; i++){
        resultado += entradas[i][0] + ": " + entradas[i][1] + "\n";
    }
    return resultado;
}

// Entrada
let pessoa = {
    nome: "Mário",
    idade: 30,
    email: "mario.carvalho@ufms.br",
    cidade: "Campo Grande"
};

// Processamento
let resultado = listarChavesValores(pessoa);
let resultado2 = listarChavesValores2(pessoa);

// Saída
console.log(resultado);
console.log("-------------------------------------------");
console.log(resultado2);