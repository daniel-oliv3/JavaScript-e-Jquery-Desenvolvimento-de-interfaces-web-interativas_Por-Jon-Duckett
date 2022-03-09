// Crie uma variável chamada dizendo para guardar a string que será usada
var saying = 'Home sweet home ';

// Crie uma variável chamada msg para conter uma mensagem que será mostrada na página
// Encontre o comprimento da string e coloque isso na variável msg
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
// Converta a string para maiúscula e adicione-a à variável msg
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
// Converta a string para minúscula e adicione-a à variável msg
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
// Encontre o caractere com um índice de 12 na string e adicione-o à variável msg
msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
// Encontre o número de índice da primeira instância de 'ee' na string e adicione-o à variável msg
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
// Encontre o número de índice da última instância do caractere 'e' na string e adicione-o à variável msg
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
// Encontre os caracteres com um número de índice no intervalo de 8 a 14 na string e adicione-o à variável msg
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
// Encontre a primeira instância de 'me' na string e substitua-a por um caractere 'w' e adicione-o à variável msg
msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

// Crie uma variável chamada el para conter o elemento cujo atributo id tem um valor de info
var el = document.getElementById('info');
// Escreva a mensagem nesse elemento
el.innerHTML = msg;