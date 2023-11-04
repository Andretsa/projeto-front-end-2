/* let dadosContato = {nome: "nome digitado pelo usuário", email: "email@email.com", mensagem: "mensagem digitada pelo usuário"};

let acesso = {email: "admin@admin.com", senha: "1234"}; */

let submitButton = document.getElementById("enviar-email");
submitButton = document.addEventListener("click", pegarDadosContato);

function pegarDadosContato() {
    let nomeUsuario = document.getElementById("nome");
    let emailUsuario = document.getElementById("email");
    let mensagemUsuario = document.getElementById("mensagem");

    let dadosContato = {nome: nomeUsuario, email: emailUsuario, mensagem: mensagemUsuario};

    console.log(dadosContato)

    return dadosContato;
}
