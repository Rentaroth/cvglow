const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createAditionalsController);
router.get('/', auth, controller.getAditionalsController);
router.get('/:id', auth, controller.getAditionalsController);
router.put('/:id', auth, controller.updateAditionalsController);
router.delete('/:id', auth, controller.deleteAditionalsController);

module.exports = router;