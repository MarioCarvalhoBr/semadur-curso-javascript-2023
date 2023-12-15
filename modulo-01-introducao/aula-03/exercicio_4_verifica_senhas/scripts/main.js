/*
Autor: Mário de Araújo Carvalho
Descrição: Verifica senhas
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var senha = prompt("Digite a senha: ");
var comfirmacao_senha = prompt("Digite a senha novamente: ");

// Processamento
if (senha == comfirmacao_senha) {
    // Saída
    console.log("Senha confirmada com sucesso!");
}else{
     // Saída
    console.log("Senhas não coincidem!");
}