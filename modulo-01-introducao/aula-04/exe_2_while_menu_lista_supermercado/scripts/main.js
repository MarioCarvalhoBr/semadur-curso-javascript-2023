/*
Autor: Mário de Araújo Carvalho
Descrição: Menu de lista de supermercado. Imprime uma lista de supermercado, e interrompe a execução se o número for 5.
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada de dados
var lista_1_frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Melão', 'Melancia', 'Abacaxi', 'Mamão', 'Pera', 'Laranja'];
var lista_2_farmacia = ['Dipirona', 'Paracetamol', 'Ibuprofeno', 'Dorflex', 'Novalgina', 'Buscopan', 'Tylenol', 'Cataflan', 'Neosaldina', 'Advil'];
var lista_3_bebidas = ['Coca-Cola', 'Guaraná', 'Fanta', 'Sprite', 'Pepsi', 'Sukita', 'Dolly', 'Schweppes', 'Soda', 'Tônica'];
var lista_4_carnes = ['Picanha', 'Alcatra', 'Maminha', 'Cupim', 'Contra-filé', 'Fraldinha', 'Patinho', 'Coxão mole', 'Coxão duro', 'Acém'];

/*
Imprmir: 
Menu do supermercado. 
1 - Lista de frutas
2 - Lista de farmácia
3 - Lista de bebidas
4 - Lista de carnes
5 - Sair
*/

// Processamento e Saída
var opcao = 1;
while (opcao != 5) {
    let texto_menu = 'Menu do supermercado: \n';
    texto_menu += '1 - Lista de frutas \n';
    texto_menu += '2 - Lista de farmácia \n';
    texto_menu += '3 - Lista de bebidas \n';
    texto_menu += '4 - Lista de carnes \n';
    texto_menu += '5 - Sair \n';
    texto_menu += 'Digite uma opção: ';

    
    opcao = parseInt(prompt(texto_menu));

    if (opcao == 1) {
        alert('Lista de frutas' + '\n' + lista_1_frutas);
    } else if (opcao == 2) {
        alert('Lista de farmácia' + '\n' + lista_2_farmacia);
    } else if (opcao == 3) {
        alert('Lista de bebidas' + '\n' + lista_3_bebidas);
    } else if (opcao == 4) {
        alert('Lista de carnes' + '\n' + lista_4_carnes);
    } else if (opcao == 5) {
        alert('Sair');
    } else {
        alert('Opção inválida');
    }

}