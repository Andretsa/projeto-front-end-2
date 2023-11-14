// Função para obter mensagens da API e adicionar à tabela existente
function atualizarTabelaMensagens() {
    // Obter as mensagens da API
    let mensagens = obterMensagens();

    // Se a tabela já existir, obter referência a ela, caso contrário, criar uma nova tabela
    let tabelaExistente = $('#tabela-mensagens');
    let tabela;

    if (tabelaExistente.length > 0) {
        // Se a tabela já existe, use-a
        tabela = tabelaExistente;
    } else {
        // Se a tabela não existe, crie uma nova
        tabela = $('<table id="tabela-mensagens"></table>').addClass('tabela-contato');
        
        // Adicionar cabeçalho da tabela
        tabela.append('<thead><tr><th>Nome</th><th>Email</th><th>Mensagem</th></tr></thead>');
        
    }

    // Adicionar linhas com os dados das mensagens
    mensagens.forEach(function (mensagem) {
        let linha = $('<tr></tr>');
        linha.append('<td>' + mensagem.nome + '</td>');
        linha.append('<td>' + mensagem.email + '</td>');
        linha.append('<td>' + mensagem.mensagem + '</td>');
        tabela.find('tbody').append(linha);
    });
}

// Inicializar a tabela de mensagens ao carregar a página
$(document).ready(function () {
    atualizarTabelaMensagens();
});
