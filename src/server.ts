import express, { response } from 'express';

import './database';

const app = express();
/*
GET = Buscas
POST = Criação
DELETE = Deletar
PATCH = Alterar uma informação específica
*/

app.listen(3333, () => console.log('Server is running on port 3333'));

app.get('/', (request, response) => {
  return response.json({
    message: "Hello World",
  });
});

app.post('/', (request, response) => {
  return response.json({message: 'Usuário salvo com sucesso!'});
});
