/*
Autor: Mário de Araújo Carvalho
Descrição:  Adicionar Propriedades: Adicione novas propriedades a um
objeto existente.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
let pessoa = {
    nome: "Mário",
    idade: 32,
    sexo: "Masculino",
    profissao: "Professor"
};
// Converter o objeto para string
console.log("Objeto original: " + JSON.stringify(pessoa));

// Processamento
pessoa.nacionalidade = "Brasileiro";
pessoa.cidade = "Campo Grande";

// Saída
console.log("Objeto modificado: " + JSON.stringify(pessoa));
