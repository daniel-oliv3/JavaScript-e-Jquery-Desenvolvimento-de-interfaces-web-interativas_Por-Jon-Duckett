// Cria uma variável para armazenar um novo objeto Date (o padrão é agora)
var today = new Date();
// Pega o ano atual
var year = today.getFullYear();
// Define a data em que a empresa foi criada
var est = new Date('Apr, 16, 1996 15:45:55');
// Obtém a diferença entre então e agora em milissegundos
var difference = today.getTime() - est.getTime();
// Divida pelo número de milissegundos para obter anos
difference = (difference / 31556900000);

// Cria uma variável chamada elMsg para conter o elemento cujo atributo id tem um valor de mensagem
var elMsg = document.getElementById('message');
// Escreva a mensagem nesse elemento.
elMsg.textContent = Math.floor(difference) + ' Year of online travel advice'