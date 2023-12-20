Para criar um projeto completo de integração com MySQL, realizando operações CRUD, vamos dividir a tarefa em duas partes: a configuração do banco de dados MySQL e a implementação do projeto Node.js.

### Parte 1: Configuração do Banco de Dados MySQL

Primeiro, vamos criar o banco de dados e a tabela `usuarios`. Supondo que você já tenha o MySQL instalado e configurado, você pode usar os seguintes comandos SQL:

```sql
CREATE DATABASE minha_loja;

USE minha_loja;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    idade INT,
    endereco VARCHAR(255),
    profissao VARCHAR(100)
);

INSERT INTO usuarios (nome, email, idade, endereco, profissao) VALUES
('Ana', 'ana@example.com', 28, 'Rua das Flores, 123', 'Desenvolvedora'),
('Carlos', 'carlos@example.com', 32, 'Avenida do Sol, 89', 'Engenheiro'),
('Mariana', 'mariana@example.com', 24, 'Alameda das Palmeiras, 200', 'Arquiteta');
```

Estes comandos criam uma tabela `usuarios` com alguns registros para começar.

### Parte 2: Implementação do Projeto Node.js

1. **Configuração Inicial**: Crie um diretório para o projeto, inicialize o Node.js e instale os pacotes necessários:

   ```bash
   mkdir projeto_node_mysql
   cd projeto_node_mysql
   npm init -y
   npm install express mysql cors
   ```

2. **Criação do Servidor Express**:

   ```javascript
   // arquivo: server.js
   const express = require('express');
   const mysql = require('mysql');
   const cors = require('cors');

   const app = express();
   app.use(cors());
   app.use(express.json());

   const conexao = mysql.createConnection({
       host: 'localhost',
       user: 'seu_usuario',
       password: 'sua_senha',
       database: 'minha_loja'
   });

   conexao.connect(err => {
       if (err) throw err;
       console.log('Conectado ao MySQL!');
   });

   app.get('/usuarios', (req, res) => {
       conexao.query('SELECT * FROM usuarios', (err, rows) => {
           if (err) throw err;
           res.json(rows);
       });
   });

   app.get('/usuarios/:id', (req, res) => {
       conexao.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, rows) => {
           if (err) throw err;
           res.json(rows[0]);
       });
   });

   app.post('/usuarios', (req, res) => {
       const { nome, email, idade, endereco, profissao } = req.body;
       conexao.query('INSERT INTO usuarios (nome, email, idade, endereco, profissao) VALUES (?, ?, ?, ?, ?)',
           [nome, email, idade, endereco, profissao], (err, result) => {
               if (err) throw err;
               res.send({ id: result.insertId, ...req.body });
       });
   });

   app.put('/usuarios/:id', (req, res) => {
       const { nome, email, idade, endereco, profissao } = req.body;
       conexao.query('UPDATE usuarios SET nome = ?, email = ?, idade = ?, endereco = ?, profissao = ? WHERE id = ?',
           [nome, email, idade, endereco, profissao, req.params.id], (err, result) => {
               if (err) throw err;
               res.send(req.body);
       });
   });

   app.delete('/usuarios/:id', (req, res) => {
       conexao.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, result) => {
           if (err) throw err;
           res.send({ message: `Usuário ${req.params.id} deletado com sucesso.` });
       });
   });

   const port = process.env.PORT || 3000;
   app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));
   ```

Para executar o projeto, use o comando `node server.js` e acesse `http://localhost:3000/usuarios` para testar.

### Notas Importantes

- Certifique-se de alterar as credenciais de conexão do MySQL (`host`, `user`, `password`, `database`) para corresponderem ao seu ambiente.
- Este exemplo é simplificado para fins educacionais. Em um projeto real, considere aspectos como validação de entrada, tratamento de
