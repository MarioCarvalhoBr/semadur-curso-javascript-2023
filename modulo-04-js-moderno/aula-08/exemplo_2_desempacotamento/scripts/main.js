/*
Autor: Mário de Araújo Carvalho
Descrição: TEstando desempacotamento: destructuring
Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

const contato = {
    nome: "Mário de Araújo Carvalho",
    email: "mario.carvalho@ufms.br",
    telefone: "(67) 9 9999-9999",
}

// Desempacotamento de objeto
const {nome, email, telefone} = contato;
console.log(`Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}`);


const lista_anos_faculdade = [2016, 2020]
// Desempacotamento de array
const [ano_inicio, ano_fim] = lista_anos_faculdade;
console.log(`Ano de início: ${ano_inicio}\nAno de conclusão: ${ano_fim}`);