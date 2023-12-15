/*
Autor: Mário de Araújo Carvalho
Descrição: Criar uma função que gerencia uma agenda de contatos. Cada contato deve ser um objeto com propriedades para nome e telefone, e todos os contatos devem ser armazenados em um array.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

//Variáveis globais
let agenda_contatos = [];

// Declaração da função
function adicionarContato(nome, telefone){
    let contato = {
        nome: nome,
        telefone: telefone
    };
    agenda_contatos.push(contato);
    console.log("Contato adicionado com sucesso!");
}

function listarContatos(){
    console.log("Lista de Contatos: ");
    for(let i = 0; i < agenda_contatos.length; i++){
        console.log("Nome: " + agenda_contatos[i].nome);
        console.log("Telefone: " + agenda_contatos[i].telefone);
        console.log("-------------------------------------------");
    }
}

function buscarContato(nome){
    let posicao = -1;
    for(let i = 0; i < agenda_contatos.length; i++){
        if(agenda_contatos[i].nome == nome){
            posicao = i;
            break;
        }
    }
    return posicao;
}

// Remover Contato
function removerContato(nome){
    let posicao = buscarContato(nome);
    if(posicao == -1){
        console.log("Contato não encontrado!");
    }else{
        agenda_contatos.splice(posicao, 1);
        console.log("Contato removido com sucesso!");
    }
}

// Entrada
while(true){
    let opcao = Number(prompt("Menu: \n1 - Adicionar Contato\n2 - Listar Contatos\n3 - Buscar Contato\n4 - Sair\n 5 - Remover Contato"));
    if(opcao == 1){
        let nome = prompt("Informe o nome do contato: ");
        let telefone = prompt("Informe o telefone do contato: ");
        adicionarContato(nome, telefone);
    }else if(opcao == 2){
        listarContatos();
    }else if(opcao == 3){
        let nome = prompt("Informe o nome do contato: ");
        let posicao = buscarContato(nome);
        if(posicao == -1){
            console.log("Contato não encontrado!");
        }else{
            console.log("Contato encontrado!");
            console.log("Nome: " + agenda_contatos[posicao].nome);
            console.log("Telefone: " + agenda_contatos[posicao].telefone);
        }
    }else if(opcao == 4){
        break;
    } else if(opcao == 5){
        let nome = prompt("Informe o nome do contato: ");
        removerContato(nome);
    }
    
    else{
        console.log("Opção Inválida!");
    }
}
