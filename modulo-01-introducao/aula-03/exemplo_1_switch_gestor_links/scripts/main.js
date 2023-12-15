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

// Processamento
switch (site) {
    case "Google":
        console.log("https://www.google.com.br");
        break;
    case "Youtube":
        console.log("https://www.youtube.com.br");
        var a = 5; 
        var b = 10;
        var c = a + b;
        // console.log(c);
        break;
    case "UFMS":
        console.log("https://www.ufms.br");
        break;
    case "Microsoft":
        console.log("https://www.microsoft.com.br");
        break;
    case "Apple":
        console.log("https://www.apple.com.br");
        break;
    default:
        console.log("Site não cadastrado");
        break;
}