Para criar uma aplicação front-end simples que teste todos os endpoints da API REST de usuários, incluindo operações CRUD (Criar, Ler, Atualizar, Deletar), usaremos HTML e JavaScript puro. Vou dividir a implementação em partes para facilitar o entendimento.

### Estrutura HTML (index.html)

Primeiro, vamos criar a estrutura HTML básica:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Teste API de Usuários</title>
</head>
<body>
    <h2>Usuários</h2>

    <!-- Tabela para exibir usuários -->
    <table id="usuariosTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Idade</th>
                <th>Endereço</th>
                <th>Profissão</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <!-- Formulário para adicionar/atualizar usuários -->
    <h3 id="formTitle">Adicionar Usuário</h3>
    <form id="usuarioForm">
        <input type="hidden" id="userId">
        <input type="text" id="nome" placeholder="Nome" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="number" id="idade" placeholder="Idade" required>
        <input type="text" id="endereco" placeholder="Endereço" required>
        <input type="text" id="profissao" placeholder="Profissão" required>
        <button type="submit">Salvar</button>
    </form>

    <script>
        // JavaScript para interagir com a API
    </script>
</body>
</html>
```

### JavaScript para Interação com a API

Agora, vamos adicionar o JavaScript para interagir com a API:

```javascript
const apiUrl = 'http://localhost:3000/usuarios'; // Substitua pela URL da sua API

document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const usuarioData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        endereco: document.getElementById('endereco').value,
        profissao: document.getElementById('profissao').value
    };

    if (userId) {
        fetch(`${apiUrl}/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuarioData)
        }).then(buscarUsuarios);
    } else {
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuarioData)
        }).then(buscarUsuarios);
    }
});

function buscarUsuarios() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(usuarios => mostrarUsuarios(usuarios))
        .catch(err => console.error(err));
}

function mostrarUsuarios(usuarios) {
    const usuariosTable = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];
    usuariosTable.innerHTML = '';
    usuarios.forEach(usuario => {
        let row = usuariosTable.insertRow();
        row.insertCell(0).innerHTML = usuario.id;
        row.insertCell(1).innerHTML = usuario.nome;
        row.insertCell(2).innerHTML = usuario.email;
        row.insertCell(3).innerHTML = usuario.idade;
        row.insertCell(4).innerHTML = usuario.endereco;
        row.insertCell(5).innerHTML = usuario.profissao;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Deletar';
        deleteButton.onclick = function() { deletarUsuario(usuario.id); };
        row.insertCell(6).appendChild(deleteButton);
    });
}

function deletarUsuario(id) {
    fetch(`${apiUrl}/${id}`, { method: 'DELETE' }).then(buscarUsuarios);
}

window.onload = buscarUsuarios;
```

Neste exemplo, temos um formulário para adicionar ou atualizar usuários e uma tabela para exibir e deletar usuários. O JavaScript interage com a API REST, enviando requisições para os endpoints correspondentes.

### Notas Importantes

1. **CORS**: Certifique-se de que o servidor da API esteja configurado para aceitar requisições do domínio onde esta página HTML será executada.
2. **URL da API**: Substitua `http://localhost:3000/usuarios` pela URL real da

 sua API.
3. **Segurança e Validação**: Este é um exemplo básico. Em um cenário de produção, você deve considerar a segurança e validação dos dados do lado do cliente e do servidor.

Este código fornece uma base para um front-end simples que interage com uma API REST de usuários, permitindo operações CRUD básicas.
