/* Este script exibe uma mensagem para o usuario de acordo com a hora atual.
   Este é um exemplo do livro JavaScript & JQuery */ 

var today = new Date();  //cria um novo ojeto date
var hourNow = today.getHours();  //verifica a hora atual
var greeting;


// Exib a mensagem aproprada de acordo com a hora atual
if(hourNow > 18){
    greeting = 'Boa noite';
} else if(hourNow > 12){
    greeting = 'Boa tarde';
} else if(hourNow > 0){
    greeting = 'Bom Dia';
} else {
    greeting = 'Bem vinda!'
}

document.write('<h3>' + greeting + '</h3>');