//O código será executado assim que o DOM (Document Object Model) estiver totalmente carregado. 
//Isso é importante para garantir que todos os elementos HTML estejam prontos para serem manipulados.

$(document).ready(function () {

    // Event listener para capturaer o envio do formulário de contato:
    //Quando o formulário com o ID "form-contato" é enviado, a função event será executada.
    $('#form-contato').submit(function (event) {
        //Isso impede o comportamento padrão do envio do formulário (recarregar a página)
        event.preventDefault(); 
        // Obtém os valores dos inputs da página
        var nome = $('#nome').val();
        var email = $('#email').val();
        var mensagem = $('#mensagem').val();
        
        // Verificar se o e-mail é válido
        if (!validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }
        // Cria-se um objeto com os dados do formulário
        var novaMensagem = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        // Envia a nova mensagem para a API
        inserirMensagem(novaMensagem);

        // Limpa os campos do formulário após o envio bem-sucedido
        $('#nome').val('');
        $('#email').val('');
        $('#mensagem').val('');

        //Redireciona o usuário para a página "area_admin.html" após o envio do formulário.
        window.location.href = "area_admin.html";
    });
})
