// Cria uma variável para armazenar um novo objeto Date (o padrão é agora)
var today = new Date();
// Cria uma variável para guardar o ano deste ano
var year = today.getFullYear();

// Cria uma variável chamada el para conter o elemento cujo atributo id tem o valor de rodapé(footer)
var el = document.getElementById('footer');
// Escreva o ano nesse elemento.
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';