//Abreviação para criar variáveis

//Primeiro metodo
var price = 5;
var quantity = 14;
var total = price * quantity;


//Segundo metodo
/*
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

//Terceiro metodo
/*
var price = 5, quantity = 14;
var total = price * quantity;
*/

//Grava o total no elemento com o id const
var el = document.getElementById('const'); // Obtém o elemento com um id de const
el.textContent = '$' + total; // Substitui o conteúdo deste elemento


/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML na linha 20, mas observe os problemas de segurança em p228-231
el.innerHTML = '$' + total;
*/
