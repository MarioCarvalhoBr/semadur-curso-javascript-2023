/*
Autor: Mário de Araújo Carvalho
Descrição: Criar elementos HTML com JavaScript
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/

// Criação de elementos HTML com JavaScript
// Criar um título h1
let titulo = document.createElement('h1');
// Setar o texto do título
titulo.textContent = 'Título criado com JavaScript'; // ou innerText
// Adicionar o título na página
document.body.appendChild(titulo);

//Criar um paragraph
let paragrafo = document.createElement('p');
// Setar o texto do paragraph
paragrafo.innerText = 'Parágrafo criado com JavaScript'; // ou innerText

// Adicionar o paragraph na página
document.body.appendChild(paragrafo);

// Criar uma lista não ordenada
let lista = document.createElement('ul');

let array_frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Abacaxi'];

// Percorrer o array de frutas
for (let i = 0; i < array_frutas.length; i++) {
    // Criar um item da lista
    let item = document.createElement('li');
    // Setar o texto do item da lista
    item.innerText = array_frutas[i];
    // Adicionar o item na lista
    lista.appendChild(item);
}

// Adicionar a lista na página
document.body.appendChild(lista);

// Criar um table
let tabela = document.createElement('table');
// Criar o cabeçalho da tabela
let cabecalho = document.createElement('thead');
// Itens do cabeçalho
let cabecalho_itens = ['Nome', 'E-mail', 'Telefone'];

// Criar uma linha do cabeçalho
let cabecalho_linha = document.createElement('tr');
// Percorrer o array de itens do cabeçalho
for (let i = 0; i < cabecalho_itens.length; i++) {
    // Criar um item do cabeçalho
    let cabecalho_item = document.createElement('th');
    // Setar o texto do item do cabeçalho
    cabecalho_item.innerText = cabecalho_itens[i];
    // Adicionar o item do cabeçalho na linha do cabeçalho
    cabecalho.appendChild(cabecalho_item);
}

// Adicionar a linha do cabeçalho na tabela
tabela.appendChild(cabecalho);

// Lista de 5 contatos 
let contatos = [
    {
        nome: 'Mário de Araújo Carvalho',
        email: 'mario@email.com',
        telefone: '(67) 9 9999-9999'
    },
    {
        nome: 'Maria da Silva',
        email: 'maria@email.com',
        telefone: '(67) 9 8888-8888'
    },
    {
        nome: 'João da Silva',
        email: 'joao@email.com',
        telefone: '(67) 9 7777-7777'
    }];

// Percorrer o array de contatos
for (let i = 0; i < contatos.length; i++) {
    // Criar uma linha da tabela
    let linha = document.createElement('tr');
   
    // Criar as colunas da tabela
    let coluna_nome = document.createElement('td');
    let coluna_email = document.createElement('td');
    let coluna_telefone = document.createElement('td');
   
    // Setar o texto das colunas
    coluna_nome.innerText = contatos[i].nome;
    coluna_email.innerText = contatos[i].email;
    coluna_telefone.innerText = contatos[i].telefone;
   
    // Adicionar as colunas na linha
    linha.appendChild(coluna_nome);
    linha.appendChild(coluna_email);
    linha.appendChild(coluna_telefone);
    
    // Adicionar a linha na tabela
    tabela.appendChild(linha);
}

// adicionar a tabela na página
document.body.appendChild(tabela);