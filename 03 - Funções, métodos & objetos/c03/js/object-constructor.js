var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;

hotel.checkAvailability = function(){
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName'); //Pega o elemento
elName.textContent = hotel.name; // Atualiza o HTML com a propriedade do objeto

var elRooms = document.getElementById('rooms'); //Pega o elemento
elRooms.textContent = hotel.checkAvailability(); // Atualiza o HTML com o resultado do método

/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML nas linhas 12 e 15, mas observe os problemas de segurança em p228-231
*/