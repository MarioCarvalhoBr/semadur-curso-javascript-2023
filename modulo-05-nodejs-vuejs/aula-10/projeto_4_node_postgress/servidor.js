/*
Autor: Mário de Araújo Carvalho
Descrição: Servidor simples http usando express
Data: 20/12/2023
E-mail: mario.carvalho@ufms.br
*/
// Bibliotecas
const express = require('express');
const {getLivros,
    getAutores,
    inserirLivro,
    deletarLivro,
    atualizarLivro,
    buscarPorCodigo } = require('./banco_client');

const cors = require('cors');

// Instanciando o express
const app = express();

// MIDDLEWARES
// Configurando o cors
app.use(cors());
// Configurando o express para receber dados em json
app.use(express.json());

// CONFIGURAÇÕES
const PORTA = 3001;
const IP = 'localhost';

// Rota padrão /
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

// Rota para listar livros
app.get('/livros', (req, res) => {
    getLivros((err, livros) => {
        if (err) {
            res.status(400).json({ erro: err.message });
        } else {
            res.json(livros.rows);
        }
    });
});

app.get('/livros/:id', (req, res) => {
    buscarPorCodigo(req.params.id, (err, livro) => {
        if (err) {
            res.status(400).json({ erro: err.message });
        } else {
            res.json(livro.rows[0]);
        }
    });
});


app.post('/livros', (req, res) => {
    // const { nome, email, idade, endereco, profissao } = req.body; // Exe: { nome: 'Mário', email: 'mario', idade: 30, endereco: 'Rua 1', profissao: 'Professor'}
    const codigo = req.body.codigo;
    const titulo = req.body.titulo;
    inserirLivro(codigo, titulo, (err, livro) => {
        if (err) {
            res.status(400).json({ erro: err.message });
        } else {
            res.json({dado: livro.rows[0], mensagem: 'Livro inserido com sucesso!'});
        }
    });
   
    // inserir({ nome, email, idade, endereco, profissao }).then(usuario => res.json(usuario));
});

app.put('/livros/:id', (req, res) => {
    const { codigo, titulo } = req.body;
    atualizarLivro(codigo, titulo, (err, livro) => {
        if (err) {
            res.status(400).json({ erro: err.message });
        } else {
            res.json({dado: livro.rows[0], mensagem: 'Livro atualizado com sucesso!'});
        }
    });
    // atualizar(req.params.id, { nome, email, idade, endereco, profissao }).then(usuario => res.json(usuario));
});

app.delete('/livros/:id', (req, res) => {
    deletarLivro(req.params.id, (err, livro) => {
        if (err) {
            res.status(400).json({ erro: err.message });
        } else {
            res.json({dado: livro.rows[0], mensagem: 'Livro excluído com sucesso!'});
        }
    });
    // excluir(req.params.id).then(usuario => res.json(usuario));
});

// Ouvidor
app.listen(PORTA, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORTA}`);
});
