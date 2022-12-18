const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createUserController)
router.get('/', controller.getUserController);
router.get('/:id', controller.getUserController);
router.put('/:id', controller.updateUserController);
router.delete('/:id', controller.deleteUserController);

module.exports = router;