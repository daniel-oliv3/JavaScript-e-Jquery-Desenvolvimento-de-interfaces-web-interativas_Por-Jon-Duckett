//Criar o array
var colors = ['white', 'black', 'custom'];

//Altera o terceio no array
colors[2] = 'beige';

//Obtem o elemento com id colors
var el = document.getElementById('colors');

//substitui o terceiro item no array
el.textContent = colors[2];