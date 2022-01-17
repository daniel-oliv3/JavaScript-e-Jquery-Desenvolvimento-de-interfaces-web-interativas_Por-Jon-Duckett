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






