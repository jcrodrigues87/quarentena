const express = require('express');

const app = express();

// Rotas
app.get('/', (request, response) => {
  console.log('Servidor foi chamado!');

  return response.send('Hello world, Cícero Feijó!');

});

app.get('/users', (request, response) => {
  return response.send('Página de usuários');
});

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});