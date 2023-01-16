const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createReferenceController);
router.get('/', auth, controller.getReferenceController);
router.get('/:id', auth, controller.getReferenceController);
router.put('/:id', auth, controller.updateReferenceController);
router.delete('/', auth, controller.deleteReferenceController);

module.exports = router;