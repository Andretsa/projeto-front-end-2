function validarEmail(email) {
    // Utilizando uma expressão regular simples para verificar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);   
}

function configurarCampo(inputElement) {
    let campo = document.getElementById(inputElement);

    // Adiciona um ouvinte de evento para o foco no campo de login
    campo.addEventListener('focus', function () {
        this.placeholder = 'Digite seu e-mail';
    });

    // Adiciona um ouvinte de evento para quando o campo perde o foco
    campo.addEventListener('blur', function () {
        this.placeholder = '';
    });
}
