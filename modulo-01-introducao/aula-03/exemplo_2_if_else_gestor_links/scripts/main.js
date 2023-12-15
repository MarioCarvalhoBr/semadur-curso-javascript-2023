/*
Autor: Mário de Araújo Carvalho
Descrição: Gestor de Endereços de Sites
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/
// Google, Youtube, UFMS, Microsoft, Apple

// Entrada
var site = prompt("Digite o endereço do site: ");

console.log("O nome do site que você digitou foi: " + site);

if (site == "Google") {
    console.log("https://www.google.com.br");
} else if (site == "Youtube") {
    console.log("https://www.youtube.com.br");
} else if (site == "UFMS") {
    console.log("https://www.ufms.br");
} else if (site == "Microsoft") {
    console.log("https://www.microsoft.com.br");
} else if (site == "Apple") {
    console.log("https://www.apple.com.br");
}else{
    console.log("Site não cadastrado");
}
