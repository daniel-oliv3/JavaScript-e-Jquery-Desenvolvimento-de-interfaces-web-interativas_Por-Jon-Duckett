var hotel = {
    name: 'Quay',
    rooms: 40,
    brooked: 25,

    checkAvailability: function(){
        return this.rooms - this.brooked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();






/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML nas linhas 13 e 16, mas observe os problemas de segurança em p228-231
*/