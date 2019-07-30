import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Rota de criação de usuario
routes.post('/users', UserController.store);
// Rota de autênticação de usuário
routes.post('/sessions', SessionController.store);

export default routes;
