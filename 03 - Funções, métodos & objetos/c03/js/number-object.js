// Crie uma variável para armazenar o número que será usado
var originalNumber = 10.23456;
// Crie uma variável para armazenar uma mensagem que será mostrada na página
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
// Arredonde o número para 3 casas decimais e adicione-o à variável msg
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
// Arredonde o número para precisamente 3 dígitos e adicione-o à variável msg
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

// Crie uma variável chamada el para conter o elemento cujo atributo id tem um valor de info
var el = document.getElementById('info');
// Escreva a mensagem nesse elemento
el.innerHTML = msg;

