import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

// Rota teste
routes.get('/', (req, res) => {
  return res.json({ mensagem: 'Olá adorei isso aqui' });
});

// Rota de criação de usuario
routes.post('/users', UserController.store);

export default routes;
