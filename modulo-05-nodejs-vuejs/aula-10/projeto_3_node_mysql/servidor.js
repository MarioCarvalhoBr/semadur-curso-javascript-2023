/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http usando express
Data: 20/12/2023
E-mail: mario.carvalho@ufms.br
*/
// Bibliotecas
const express = require('express');
const conexao = require('./banco');
const cors = require('cors');

// Instanciando o express
const app = express();

// MIDDLEWARES
// Configurando o cors
app.use(cors());
// Configurando o express para receber dados em json
app.use(express.json());

// CONFIGURAÇÕES
const PORTA = 3000;
const IP = 'localhost';

// Rota padrão /
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.get('/usuarios', (req, res) => {
    conexao.query('SELECT * FROM usuarios', (err, rows) => {
        if (err){
            res.status(500).send({ erro: 'Erro ao buscar os usuários!' });
            return;
        };
        res.json(rows);
    });
});

app.get('/usuarios/:id', (req, res) => {
    conexao.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, rows) => {
        if (err){
            res.status(500).send({ erro: 'Erro ao buscar o usuário!' });
            return;
        };
        // Se não encontrar o usuário
        if (rows.length === 0){
            res.status(404).send({ erro: 'Usuário não encontrado!' });
            return;
        };
        res.json(rows[0]);
    });
});


app.post('/usuarios', (req, res) => {
    // const { nome, email, idade, endereco, profissao } = req.body; // Exe: { nome: 'Mário', email: 'mario', idade: 30, endereco: 'Rua 1', profissao: 'Professor'}
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const endereco = req.body.endereco;
    const profissao = req.body.profissao;
   
    conexao.query('INSERT INTO usuarios (nome, email, idade, endereco, profissao) VALUES (?, ?, ?, ?, ?)',
        [nome, email, idade, endereco, profissao], (err, result) => {
            if (err){
                res.status(500).send({ erro: 'Erro ao inserir o usuário!' });
                return;
            }
            // Formatar uma mensagem de sucesso
            res.send({ id: result.insertId, ...req.body, mensagem: 'Usuário inserido com sucesso!' });
    });
});

app.put('/usuarios/:id', (req, res) => {
    const { nome, email, idade, endereco, profissao } = req.body;
    conexao.query('UPDATE usuarios SET nome = ?, email = ?, idade = ?, endereco = ?, profissao = ? WHERE id = ?',
        [nome, email, idade, endereco, profissao, req.params.id], (err, result) => {
            if (err){
                res.status(500).send({ erro: 'Erro ao atualizar o usuário!' });
                return;
            }
            res.send({response: 'Usuário atualizado com sucesso!'});
    });
});

app.delete('/usuarios/:id', (req, res) => {
    conexao.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send({ erro: 'Erro ao deletar o usuário!' });
            return;
        }
        res.send({ message: `Usuário ${req.params.id} deletado com sucesso.` });
    });
});

// Ouvidor
app.listen(PORTA, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORTA}`);
});
