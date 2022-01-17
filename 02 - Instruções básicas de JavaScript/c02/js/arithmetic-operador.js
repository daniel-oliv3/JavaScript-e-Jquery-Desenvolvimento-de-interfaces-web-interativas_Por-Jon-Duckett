// Cria uma variável para o subtotal e faz um cálculo
var subtotal = (13 + 1) * 5; //subtotal e 70

// Cria uma variável para o frete e faz um cálculo
var shipping = 0.5 * (13 + 1); //shipping e 7

// Cria o total combinando os valores de subtotal e frete
var total = subtotal + shipping; //total 77

// Escreve os resultados na tela
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;


var elTotal = document.getElementById('total');
elTotal.textContent = total;


/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML nas linhas 12, 15 e 18, mas observe os problemas de segurança em p228-231
elSub.innerHTML = subtotal;
elShip.innerHTML = envio;
elTotal.innerHTML = total;
*/
