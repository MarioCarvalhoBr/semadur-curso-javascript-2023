/*
Autor: Mário de Araújo Carvalho
Descrição: Agenda de contatos
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/

let contatos = [];

function excluir(i) {
    contatos.splice(i, 1);
    
    tabela.innerHTML = "";
    
    carregar_tabela();
    
}

function carregar_tabela() {
    let tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

  // Adicionar o cabeçalho da tabela
    tabela.innerHTML = `
        <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>E-mail</th>
        <th>Opções</th>
        </tr>
    `;

  for (let i = 0; i < contatos.length; i++) {
    let contato = contatos[i];

    tabela.innerHTML += `
      <tr>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td>${contato.email}</td>
        <td>
          <button onclick="excluir(${i})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let email = document.getElementById("email");

let tabela = document.getElementById("tabela");
let botao = document.getElementById("btn_adicionar");

botao.addEventListener("click", function (e) {
  e.preventDefault();

  let contato_form = {
    nome: nome.value,
    telefone: telefone.value,
    email: email.value,
  };

  contatos.push(contato_form);

  nome.value = "";
  telefone.value = "";
  email.value = "";

  carregar_tabela();

  
})

carregar_tabela()