// Configura o objeto
var hotel = {
    name: 'Park',
    rooms: 120,
    brooked: 77,
    checkAvailability: function(){
        return this.rooms - this.brooked;
    }
};

var elName = document.getElementById('hotelName'); //Pega o elemento
elName.textContent = hotel.name; // Atualiza o HTML com a propriedade do objeto

var elRooms = document.getElementById('rooms'); //Pega o elemento
elRooms.textContent = hotel.checkAvailability(); // Atualiza o HTML com a propriedade do objeto
