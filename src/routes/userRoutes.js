import { Router } from 'express';
import userController from '../controllers/UserController';

// middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria exisitr (só exemplos de CRUD)
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
// router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
