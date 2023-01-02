const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createEducationController);
router.get('', auth, controller.getEducationController);
router.get('/:id', auth, controller.getEducationController);
router.put('/:id', auth, controller.updateEducationController);
router.delete('/:id', auth, controller.deleteEducationController);

module.exports = router;