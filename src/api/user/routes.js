const router = require('express').Router();
const controller = require('./controller');
const auth = require('../../services/auth').verifyToken;
const admin = require('../../services/admin').validateAdmin;

router.post('/', controller.createUserController);
router.post('/admin', admin, controller.createAdminController);
router.post('/login', controller.generateSession);
router.post('/keep-logged', auth, controller.keepSessionAlive);
router.get('/', auth, controller.getUserController);
router.get('/:id', auth, controller.getUserController);
router.put('/:id', auth, controller.updateUserController);
router.delete('/:id', auth, controller.deleteUserController);

module.exports = router;