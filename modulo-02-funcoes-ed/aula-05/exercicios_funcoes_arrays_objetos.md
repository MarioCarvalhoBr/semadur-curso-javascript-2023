### Exercício 1: Agenda de Contatos

**Objetivo**: Criar uma função que gerencia uma agenda de contatos. Cada contato deve ser um objeto com propriedades para nome e telefone, e todos os contatos devem ser armazenados em um array.

**Tarefas**:
1. Defina um array para armazenar os contatos.
2. Crie objetos para representar cada contato.
3. Implemente uma função para adicionar um novo contato ao array.
4. Implemente uma função para imprimir todos os contatos.

**Exemplo de Estrutura**:
```javascript
let contatos = [];

function adicionarContato(nome, telefone) {
    contatos.push({ nome: nome, telefone: telefone });
}

function imprimirContatos() {
    for (let contato of contatos) {
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}`);
    }
}
```

### Exercício 2: Calculadora de Estatísticas

**Objetivo**: Escrever uma função que recebe um array de números e retorna um objeto com estatísticas: mínimo, máximo e média dos números.

**Tarefas**:
1. Implemente uma função que aceita um array de números.
2. A função deve calcular e retornar um objeto com as propriedades: min (mínimo), max (máximo) e media (média).

**Exemplo de Estrutura**:
```javascript
function calcularEstatisticas(numeros) {
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
    let media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    return { min, max, media };
}
```

### Exercício 3: Biblioteca de Livros

**Objetivo**: Criar uma função para gerenciar uma biblioteca de livros. Cada livro é um objeto com título, autor e status de empréstimo.

**Tarefas**:
1. Crie um array de objetos, onde cada objeto representa um livro.
2. Implemente funções para adicionar um novo livro, emprestar um livro e devolver um livro.

**Exemplo de Estrutura**:
```javascript
let biblioteca = [];

function adicionarLivro(titulo, autor) {
    biblioteca.push({ titulo: titulo, autor: autor, emprestado: false });
}

function emprestarLivro(titulo) {
    let livro = biblioteca.find(livro => livro.titulo === titulo);
    if (livro && !livro.emprestado) {
        livro.emprestado = true;
        return true;
    }
    return false;
}

function devolverLivro(titulo) {
    let livro = biblioteca.find(livro => livro.titulo === titulo);
    if (livro && livro.emprestado) {
        livro.emprestado = false;
        return true;
    }
    return false;
}
```
