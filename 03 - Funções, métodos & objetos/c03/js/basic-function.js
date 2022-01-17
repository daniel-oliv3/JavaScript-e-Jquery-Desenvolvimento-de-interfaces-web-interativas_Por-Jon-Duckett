// Cria uma variável chamada msg para armazenar uma nova mensagem
var msg = 'Inscreva-se para receber nossa newsletter com 10% de desconto!';

// Crie uma função para atualizar o conteúdo do elemento cujo atributo id tenha um valor de mensagem
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
  }
  
  // Chame a função
  updateMessage();