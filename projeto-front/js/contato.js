/*O código será executado assim que o DOM (Document Object Model) estiver totalmente carregado. 
Isso é importante para garantir que todos os elementos HTML estejam prontos para serem manipulados.*/

$(document).ready(function () {
    configurarCampo("email");
    /*Event listener para capturaer o envio do formulário de contato:
    Quando o formulário com o ID "form-contato" é enviado, a função event será executada.*/
    $('#form-contato').submit(function (event) {
        //Isso impede o comportamento padrão do envio do formulário (recarregar a página)
        event.preventDefault(); 
        // Obtém os valores dos inputs da página
        let nome = $('#nome').val();
        let email = $('#email').val();
        let mensagem = $('#mensagem').val();

        // Verificar se o e-mail é válido
        if (!validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }
        // Cria-se um objeto com os dados do formulário
        let novaMensagem = {
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
    // Adiciona um evento de entrada para o campo do nome
    $('#nome').on('input', function() {
        let limiteNome = 20; 
        let caracteresDigitadosNome = $(this).val().length;
        let caracteresRestantesNome = limiteNome - caracteresDigitadosNome;

        if (caracteresRestantesNome < 0) {
            alert("Limite de caracteres no nome excedido!\n" +
            "O nome não pode ter mais de " + limiteNome + " caracteres.");
            return;
        }
    });
    /* Event listener para atualizar a contagem de caracteres em tempo real
    Ao tentar enviar o formulário, ele verifica se a mensagem excede o 
    limite de caracteres definido (limiteCaracteres).*/
    $('#mensagem').on('input', function() {
        let limiteCaracteres = 100; 
        let caracteresDigitados = $(this).val().length;
        let caracteresRestantes = limiteCaracteres - caracteresDigitados;

        // Atualiza a mensagem abaixo do campo de mensagem
        $('#contador-caracteres').text("Restam " + caracteresRestantes + "caracteres.");

         // Verifica se a mensagem é muito longa
        if (caracteresRestantes < 0) {
            alert("A mensagem não pode ter mais de " + limiteCaracteres + " caracteres.");
            $('#contador-caracteres').text("Você excedeu o limite.");
            return;
        }
    });
})
