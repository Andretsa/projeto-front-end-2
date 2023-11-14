document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#login').addEventListener('submit', function (event) {
        event.preventDefault();

        let objLoginSenha = {
            email : document.getElementById('username').value,
            senha : document.getElementById('password').value
        };
        
        var isValid = validarUsuario(objLoginSenha);

        if (isValid) {
            alert("Login bem-sucedido!");
            window.location.href = "msg_recebidas.html";
        } else {
            alert("Credenciais de login inválidas. Por favor, tente novamente.");
            if (objLoginSenha.email === "") {
                alert("Por favor, digite o email.");
            } else if (!validarEmail(objLoginSenha.email)) {
                alert("Por favor, digite um email válido.");
            
            }else if(objLoginSenha.senha.length >= 4){
                alert("Por favor, digite apenas 4 caracteres")
            }
             else {
                alert("Por favor, digite a senha corretamente.");
            }
        }
        document.getElementById('login').reset();
    });
});


