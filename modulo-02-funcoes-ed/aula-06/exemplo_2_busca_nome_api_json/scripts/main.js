/*
Autor: Mário de Araújo Carvalho
Descrição: Pegar um nome do usuario e pesquisar o produto em: https://dummyjson.com/products/search?q=NomeProduto 
E listar os produtos encontrados: nome, preco, thumbnail
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada de dados
let nomeProduto = prompt("Digite o nome do produto: ");

// Processamento
let url = "https://dummyjson.com/products/search?q=" + nomeProduto;
console.log(url);

fetch(url)
.then(resposta => resposta.json())
.then(dados => {
    let produtos = dados.products;
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
       
        console.log("Título: " + produto.title);
        console.log("Preço: " + produto.price);
        console.log("Thumbnail: " + produto.thumbnail);
        console.log(" ");
    }
})