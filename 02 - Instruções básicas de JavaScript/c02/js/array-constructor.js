var colors = new Array('white', 
                       'black', 
                       'custom');

var el = document.getElementById('colors');
el.innerHTML = colors[0];

/*
O array literal (mostrado no primeiro exeplo de codigo) e
preferido em relação ao construtor de arrys ao criar arrays.
*/

/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML na linha 10, mas observe os problemas de segurança em p228-231
el.innerHTML = cores[0];

Houve um erro de digitação na primeira impressão na última linha deste exemplo, ele foi corrigido neste arquivo.
*/