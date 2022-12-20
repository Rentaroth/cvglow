const router = require('express').Router();
const controller = require('./controller');
const auth = require('../../services/auth');

router.post('/', controller.createUserController);
router.post('/login', controller.generateSession);
router.get('/', controller.getUserController);
router.get('/:id', controller.getUserController);
router.put('/:id', controller.updateUserController);
router.delete('/:id', controller.deleteUserController);

module.exports = router;