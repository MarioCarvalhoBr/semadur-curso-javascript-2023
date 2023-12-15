/*
Autor: Mário de Araújo Carvalho
Descrição: Agenda de dias da semana. Segunda: Esporte, Terça: Estudar, Quarta: Ler, Quinta: Natação, Sexta: Passear com o cachorro, Sábado: Descansar, Domingo: Preparar a semana.
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var dia_semana = prompt("Digite o dia da semana: ");
// Processamento
switch (dia_semana) {
    case "segunda":
        console.log("Esporte");
        break;
    case "terça":
        console.log("Estudar");
        break;
    case "quarta":
        console.log("Ler");
        break;
    case "quinta":
        console.log("Natação");
        break;
    case "sexta":
        console.log("Passear com o cachorro");
        break;
    case "sábado":
        console.log("Descansar");
        break;
    case "domingo":
        console.log("Preparar a semana");
        break;
    default:
        console.log("Dia da semana inválido");
        break;
    
}