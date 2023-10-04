// Importa componentes do express
import {Router} from 'express';

import TesteController from './controllers/TesteController';

// Instancia roteador
const Routes = Router();

// rotas CRUD
Routes.get('/teste',new TesteController().index);
Routes.get('/teste/:id',new TesteController().show);
Routes.post('/teste',new TesteController().store);
Routes.put('/teste/:id',new TesteController().update);
Routes.delete('/teste/:id',new TesteController().delete);

export default Routes;