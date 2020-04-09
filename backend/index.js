const express = require('express');

const app = express();
app.use(express.urlencoded());

// rotas
app.get('/', (request, response) => {

  console.log('Servidor foi requisitado!');

  return response.send('Servidor respondeu!');
});

app.post('/contato', (request, response) => {

  console.log('Servidor foi requisitado via POST - /contato');

  const corpo = request.body;

  console.log('NOME:', corpo.nome);
  console.log('E-MAIL:', corpo.email);
  console.log('MENSAGEM:', corpo.mensagem);

  return response.send('OK!');

});




app.listen(3333, () => {
  console.log('Servidor inicializado na porta: 3333');
});