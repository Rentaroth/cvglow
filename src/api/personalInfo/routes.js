const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.get('/', auth, controller.bringPersonalInfo);
router.get('/:id', auth, controller.bringPersonalInfo);
router.post('/', auth, controller.addPersonalInfo);
router.put('/:id', auth, controller.modifyPersonalInfo);
router.delete('/:id', auth, controller.erasePersonalInfo);

module.exports = router;
