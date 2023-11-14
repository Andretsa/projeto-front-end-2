document.addEventListener("DOMContentLoaded", function () {

    configurarCampo("username");

    document.querySelector('#login').addEventListener('submit', function (event) {
        event.preventDefault();

        let objLoginSenha = {
            email : document.getElementById('username').value,
            senha : document.getElementById('password').value
        };
        
        let isValid = validarUsuario(objLoginSenha);

        if (isValid) {
            alert("Login bem-sucedido!");
            window.location.href = "msg_recebidas.html";
        } else {
            let erroMensagem = "Credenciais de login inválidas. Por favor, corrija os seguintes problemas:\n";
        
            if (objLoginSenha.email === "") {
                erroMensagem += "- Digite um email.\n";
            } else if (!validarEmail(objLoginSenha.email)) {
                erroMensagem += "- Digite um email válido.\n";
            }else if(objLoginSenha.senha.length !== 4) {
                erroMensagem += "- A senha deve ter pelo menos 4 números.\n";
            }else{
                erroMensagem = "Por favor, verifique novamente seu email e senha."
            }
            alert(erroMensagem);
        }
        
        document.getElementById('login').reset();
    });
})
