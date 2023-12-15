/*
Autor: Mário de Araújo Carvalho
Descrição: Função de Verificação: Crie uma função que aceite um número e
verifique se é par ou ímpar
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

/*
Nomes de funções: 
- camelCase = É um padrão de nomenclatura de funções, onde a primeira letra da primeira palavra é minúscula e a primeira letra das palavras seguintes são maiúsculas. Exemplo: verificaParImpar
- snake_case = É um padrão de nomenclatura de funções, onde as palavras são separadas por underline. Exemplo: verifica_par_impar 
- PascalCase = É um padrão de nomenclatura de funções, onde a primeira letra de cada palavra é maiúscula. Exemplo: VerificaParImpar
*/

// Declaração da função
function verificaParImpar(numero){
    if(numero % 2 == 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}

// Entrada 
let numero = parseInt(prompt("Digite um número: "));

// Processamento
let resultado = verificaParImpar(numero);

// Saída
console.log("O número " + numero + " é " + resultado + "."); // "O número 5 é Ímpar.
