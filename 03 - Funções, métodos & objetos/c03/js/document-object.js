// Cria uma variável chamada msg para conter uma mensagem que será mostrada na página
// Encontre o título do documento e coloque-o na variável msg
var msg = '<p><b>Título da página: </b>' + document.title + '<br/>';

// Localiza a URL do documento e adiciona na variável msg
msg += '<b>Endereço da página: </br>' + document.URL + '</br>';

// Encontre a data em que o documento foi modificado pela última vez e adicione-o à variável msg
msg += '<b>Última modificação: </br>' + document.lastModified + '</p>';
// Cria uma variável chamada el para conter o elemento cujo atributo id tem o valor de rodapé
var el = document.getElementById('footer');
// Escreve a mensagem nesse elemento
el.innerHTML = msg;