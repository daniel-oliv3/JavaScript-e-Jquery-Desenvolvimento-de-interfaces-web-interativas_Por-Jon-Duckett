// Cria uma variável chamada msg para conter uma mensagem que será mostrada na página
// Encontre a largura da janela do navegador e coloque isso na variável msg
var msg = '<h2>Janela do navegador</h2><p>Largura: ' + window.innerWidth + '</p>';
// Encontre a altura da janela e adicione-a à variável msg
msg += '<p>Altura: ' + window.innerHeight + '</p>';
// Encontre o número de itens no histórico da janela do navegador e adicione-o à variável msg
msg += '<h2>História</h2><p>Item: ' +  window.history.length + '</p>';
// Encontre a largura da tela do computador e adicione-a à variável msg
msg += '<h2>Tela</h2><p>Largura: ' +  window.screen.width + '</p>';
// Encontre a altura da tela do computador e adicione-a à variável msg
msg += '<p>Largura:' + window.screen.height +'</p>';



// Cria uma variável chamada el para conter o elemento cujo atributo id tem um valor de info
var el = document.getElementById('info');
// Escreve a mensagem nesse elemento
el.innerHTML = msg;
// Encontra a localização da página atual e a exibe em uma caixa de alerta
alert('Pagina atual: ' + window.location)