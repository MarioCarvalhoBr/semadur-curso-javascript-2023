/*
Autor: Mário de Araújo Carvalho
Descrição: Exemplo de descrição
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

//let titulo_h1 = document.getElementById("titulo");
// Setar o texto do elemento
// titulo_h1.innerText = "Novo Título";

let titulo = document.getElementById("titulo");
let texto = document.getElementById("txt_nome");
let botao = document.getElementById("botao_clique");

// Caso o usuário clique no botão, alterar o texto do título
botao.onclick = function(){
    titulo.innerText = texto.value;
}