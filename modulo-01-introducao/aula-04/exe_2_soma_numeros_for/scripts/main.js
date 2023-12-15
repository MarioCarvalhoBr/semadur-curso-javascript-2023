/*
Autor: Mário de Araújo Carvalho
Descrição: Soma dos números de 1 a 10
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/
// Entrada
var resultado_soma = 0;
/**
 * Operadores de atribuição:
++: incremento. Exemplo: i++ -> i = i + 1
--: decremento. Exemplo: i-- -> i = i - 1
+=: atribuição com soma. Exemplo: i += 2 -> i = i + 2
-=: atribuição com subtração. Exemplo: i -= 2 -> i = i - 2
*=: atribuição com multiplicação. Exemplo: i *= 2 -> i = i * 2
/=: atribuição com divisão. Exemplo: i /= 2 -> i = i / 2
 */

// Processamento
for (let i = 1; i <= 10; i++) {
    // resultado_soma = resultado_soma + i;
    console.log(resultado_soma + " + " + i + " = ")
    resultado_soma += i; 
    console.log(resultado_soma);

}
// Saída
console.log("A soma dos números de 1 a 10 é: " + resultado_soma);