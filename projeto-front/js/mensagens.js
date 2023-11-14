// Função para obter mensagens da API e gerar a tabela
function atualizarTabelaMensagens() {
    // Obter as mensagens da API
    var mensagens = obterMensagens();

    // Limpar a tabela existente
    $('#tabela-mensagens').remove();

    // Criar uma nova tabela
    var tabela = $('<table id="tabela-mensagens"></table>').addClass('tabela-contato');

    // Adicionar cabeçalho da tabela
    tabela.append('<tr><th>Nome</th><th>Email</th><th>Mensagem</th></tr>');

    // Adicionar linhas com os dados das mensagens
    mensagens.forEach(function (mensagem) {
        var linha = $('<tr></tr>');
        linha.append('<td>' + mensagem.nome + '</td>');
        linha.append('<td>' + mensagem.email + '</td>');
        linha.append('<td>' + mensagem.mensagem + '</td>');
        tabela.append(linha);
    });

    // Adicionar a tabela à área de contato
    $('#area').append(tabela);
    
}

// Inicializar a tabela de mensagens ao carregar a página
atualizarTabelaMensagens();
