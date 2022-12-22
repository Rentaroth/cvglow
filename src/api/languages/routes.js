const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createLanguagesController);
router.get('/', auth, controller.getLanguagesController);
router.get('/:id', auth, controller.getLanguagesController);
router.put('/:id', auth, controller.updateLanguagesController);
router.delete('/:id', auth, controller.deleteLanguagesController);

module.exports = router;