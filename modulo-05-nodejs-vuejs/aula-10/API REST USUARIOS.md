Vamos criar um exemplo completo de uma API REST de usuários em Node.js. Esta API vai manipular um array de usuários e permitir operações CRUD (Criar - POST, Ler - GET, Atualizar - PUT, Deletar - DELETE). Por simplicidade, os dados serão armazenados em um array em memória, e não em um banco de dados.

Primeiro, configure o ambiente Node.js:

1. Crie um novo diretório para o projeto e inicialize o Node.js com `npm init`.
2. Instale o Express, um framework web para Node.js: `npm install express`.

Aqui está um exemplo básico de como estruturar a aplicação:

### Código da API REST de Usuários

```javascript
const express = require('express');
const app = express();
app.use(express.json()); // Para parsing de JSON no body das requisições

let usuarios = [
    { id: 1, nome: "Ana", email: "ana@example.com", idade: 25, profissao: "Desenvolvedora", endereco: "Rua A, 123" },
    // Adicione mais 9 usuários aqui
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuário não encontrado.');
    res.json(usuario);
});

app.post('/usuarios', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        profissao: req.body.profissao,
        endereco: req.body.endereco
    };
    usuarios.push(usuario);
    res.send(usuario);
});

app.put('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuário não encontrado.');

    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.idade = req.body.idade;
    usuario.profissao = req.body.profissao;
    usuario.endereco = req.body.endereco;
    res.send(usuario);
});

app.delete('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).send('Usuário não encontrado.');

    usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
    res.send(usuario);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));
```

### Funcionalidades da API

- **GET `/usuarios`**: Retorna todos os usuários.
- **GET `/usuarios/:id`**: Retorna um usuário pelo ID.
- **POST `/usuarios`**: Adiciona um novo usuário.
- **PUT `/usuarios/:id`**: Atualiza um usuário existente.
- **DELETE `/usuarios/:id`**: Deleta um usuário.

### Testando a API

Você pode testar essa API usando ferramentas como Postman ou Curl. Lembre-se de completar o array `usuarios` com mais 9 usuários para manipulação.

### Nota Importante

Este exemplo é simplificado e destinado a fins educacionais. Em um cenário de produção, você deve considerar aspectos como validação de dados, segurança (por exemplo, evitar ataques de injeção), e persistência de dados usando um banco de dados real.

LINK do Postman
https://www.postman.com/
[]: # (FIM_DO_ARQUIVO)