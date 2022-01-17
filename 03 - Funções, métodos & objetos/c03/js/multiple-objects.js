// Cria o template para objetos que são hotéis
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

// Cria dois objetos hotel
var quayHotel =  new Hotel('Quay', 40, 25);
var parkHotel =  new Hotel('Park', 120, 77);

// Atualiza o HTML da página
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;


var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML nas linhas 21 e 26, mas observe os problemas de segurança em p228-231
*/