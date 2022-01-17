var inStock;
var shipping;

inStock = true;
shipping = false;

/* outro processamento pode entrar aqui e, como resultado, o script pode precisar alterar esses valores */


inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;