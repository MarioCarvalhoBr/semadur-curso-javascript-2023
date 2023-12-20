async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

// Testar a conexão
connect().then(conn => {
    console.log("Conexão com o PostgreSQL estabelecida com sucesso!");
    conn.release();
}).catch(err => console.log(err.stack));

// Criar o metodo listar
async function listar() {
    const conn = await connect();
    const res = await conn.query('SELECT * FROM usuarios');
    return res.rows;
}

// Criar o metodo inserir
async function inserir(usuario) {
    const conn = await connect();
    const sql = 'INSERT INTO usuarios (nome, email, idade, endereco, profissao) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [usuario.nome, usuario.email, usuario.idade, usuario.endereco, usuario.profissao];
    const res = await conn.query(sql, values);
    return res.rows[0];
}

// Criar o metodo buscarPorId
async function buscarPorId(id) {
    const conn = await connect();
    const res = await conn.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return res.rows[0];
}

// Criar o metodo atualizar
async function atualizar(id, usuario) {
    const conn = await connect();
    const sql = 'UPDATE usuarios SET nome = $1, email = $2, idade = $3, endereco = $4, profissao = $5 WHERE id = $6 RETURNING *';
    const values = [usuario.nome, usuario.email, usuario.idade, usuario.endereco, usuario.profissao, id];
    const res = await conn.query(sql, values);
    return res.rows[0];
}

// Criar o metodo excluir
async function excluir(id) {
    const conn = await connect();
    const res = await conn.query('DELETE FROM usuarios WHERE id = $1', [id]);
    return res.rows[0];
}

// Exportar os metodos
module.exports = { listar, inserir, buscarPorId, atualizar, excluir };