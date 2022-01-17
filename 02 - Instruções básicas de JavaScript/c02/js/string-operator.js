// Armazena a saudação em uma variável
var greeting = 'Olá ';

// Armazena o nome do usuário em uma variável
var name = 'Molly';

/* Cria a mensagem de boas vindas concatenando as strings nas duas variáveis */
var welcoeMessege = greeting + name + '!';

// Obtém o elemento que tem um id de saudação
var el = document.getElementById('greeting');

// Substitui o conteúdo deste elemento pela mensagem pessoal
el.textContent = welcoeMessege;


/*
NOTA: textContent não funciona no IE8 ou anterior
Você pode usar innerHTML na linha 14, mas observe os problemas de segurança em p228-231
el.innerHTML = mensagem de boas-vindas;
*/