// Configura o objeto
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Atualiza o HTML
var elName = document.getElementById('hotelName'); //Pega o elemento
elName.textContent = hotel.name; // Atualiza o HTML com a propriedade do objeto


var elPool = document.getElementById('pool'); //Pega o elemento
elPool.className = 'Pool: ' + hotel.pool; // Atualiza o HTML com a propriedade do objeto

var elGym = document.getElementById('gym'); //Pega o elemento
elGym.className = 'Gym: ' + hotel.gym; // Atualiza o HTML com a propriedade do objeto


/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML na linha 14, mas observe os problemas de segurança em p228-231
*/