const router = require('express').Router();
const controller = require('./controller');
const auth = require('../../services/auth').verifyToken;

router.post('/', controller.createUserController);
router.post('/login', controller.generateSession);
router.post('/keep-logged', auth, controller.keepSessionAlive);
router.get('/', controller.getUserController);
router.get('/:id', controller.getUserController);
router.put('/:id', controller.updateUserController);
router.delete('/:id', controller.deleteUserController);

module.exports = router;