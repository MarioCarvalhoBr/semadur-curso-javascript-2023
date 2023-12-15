/*
Autor: Mário de Araújo Carvalho
Descrição: Front-end da aplicação que carrega dados de um servidor: http://localhost:3000/usuarios
Data: 30/11/2023
E-mail: mario.carvalho@ufms.br
*/

function carregarUsuarios() {


  fetch("http://localhost:3000/usuarios")
    .then((resposta) => resposta.json())
    .then((dados) => {
      let tb_usarios = document.getElementById("tb_usuarios");

      // Limpar a tabela
      tb_usarios.innerHTML = "";

      // Cabecalho da tabela
      tb_usarios.innerHTML = `
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                </tr>
            `;

      // Preencher a tabela
      for (let index = 0; index < dados.length; index++) {
        const usuario = dados[index];

        tb_usarios.innerHTML += `
                    <tr>
                        <td>${usuario.codigo}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.sobrenome}</td>
                        <td>${usuario.email}</td>
                        <td>${usuario.telefone}</td>
                    </tr>
                `;
      }
    });
}

var btn_carregar = document.getElementById("btn_carregar_dados");

btn_carregar.addEventListener("click", function(){
    carregarUsuarios();
});