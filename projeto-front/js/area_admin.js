document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento ao formulário
    document.querySelector('form').addEventListener('submit', function (event) {
        // Impede a submissão padrão do formulário
        event.preventDefault();

        // Obtém os valores do formulário
        var objLoginSenha = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        // Chama a função validarUsuario com as credenciais de login
        var isValid = validarUsuario(objLoginSenha);

        // Verifica se a validação foi bem-sucedida
        if (isValid) {
            alert("Login bem-sucedido!");
        } else {
            alert("Credenciais de login inválidas. Por favor, tente novamente.");
        }
    });
});
