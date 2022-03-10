/* O script e colocado dentro de uma expressão de função imediatamente invocada que ajuda a proteger o escopo das variaveis*/

(function() {
    //PARTE 1 - Cria o objeto hotel e exibe os detalhes da oferta

    //Cria o objeto hotel usando a síntaxe de literal
    var hotel = {
        name: 'Park',
        roomRate: 240, //quantia em dólar
        discount: 15, //percentual de desconto
        offerPrice: function(){
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    //Exibe o nome do hotel, o preço padrão, e o preço especial
    var hotelName, roomRate, specialRate; //declaração de variáveis

    hotelName = document.getElementById('hotelName'); //obtém os elementos
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //exibe o nome do hotel
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //exibe o preço
    specialRate.textContent = '$' + hotel.offerPrice(); //exibe a oferta


    //Parte 2 - Calcula e exibe os detalhes sobre o fim da oferta
    var expiryMsg; //mensagem exibida ao usuários
    var today; //data de hoje
    var elEnds; //o elemento que exibe a mensagem sobre o fim da oferta

    function offerExpires(today) {
        //declara as variáveis dentro da função para o escopo local
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        //adiciona 7 dias á data/hora atual(adicionando em milissegundos)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        //cria um array para armazenar os nomes dos dias/meses
        dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        //coleta partes da data para mostrar na página
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        
        //cria a mensagem
        expiryMsg = 'A oferta expira em seguida ';
        expiryMsg += day + '<br/>(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;

    }    
        today = new Date(); //coloca a data de hoe na variável
        elEnds = document.getElementById('offerEnds'); //obtém o elemento offerEnds
        elEnds.innerHTML = offerExpires(today); //adiciona a mensagem
    
    //fim da expressão de funcão imediatamente invocada
}());