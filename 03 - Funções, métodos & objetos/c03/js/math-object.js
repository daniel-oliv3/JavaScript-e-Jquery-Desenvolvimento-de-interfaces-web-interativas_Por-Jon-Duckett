// Cria uma variável para armazenar um número aleatório entre 1 e 10
var randomNum = Math.floor((Math.random() * 10) + 1);

// Cria uma variável chamada el para conter o elemento cujo atributo id tem um valor de info
var el = document.getElementById('info');
// Escreve o número nesse elemento
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';