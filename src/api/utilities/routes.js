const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createUtilityController);
router.get('/', auth, controller.getUtilityController);
router.get('/:id', auth, controller.getUtilityController);
router.put('/:id', auth, controller.updateUtilityController);
router.delete('/:id', auth, controller.deleteUtilityController);

module.exports = router;