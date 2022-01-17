//Cria as variaveis para a mensagem de boas-vindas
var greeting = 'Olá ';
var name = 'Molly';

var messege = ' , Por favor, verifique seu pedido:';

//Concatena as tres variaveis acima para criar a mensagem de boas-vidas
var welcome = greeting + name + messege;

//Cria variaveis para armazenar detalhes sobre a placa
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Obtem o elemento que tem o id greeting
var el = document.getElementById('greeting');

//Substitui o conteudo desse elemento pela mensagem de boas-vindas personalizadas
el.textContent = welcome;

//Obtem o elemento que tem o id userSign e então atualiza seu conteudo
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Obtem o elemento que tem o id tiles e atualiza seu conteudo
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Obtem o elemento que tem o id subTotal e atualiza seu conteudo
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Obtem o elemento que tem o id shipping e atualiza seu conteudo
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//Obtem o elemento que tem o id grandTotal e atualiza seu conteudo
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;


/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML em vez de textContent, mas observe os problemas de segurança em p228-231

Na primeira impressão, a linha 33-34 repetiu elSubTotal (em vez de elShipping).
Isso foi corrigido em execuções de impressão posteriores e neste exemplo de código.
*/