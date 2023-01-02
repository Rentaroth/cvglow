const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createExperienceController);
router.get('/', auth, controller.getExperienceController);
router.get('/:id', auth, controller.getExperienceController);
router.put('/:id', auth, controller.updateExperienceController);
router.delete('/:id', auth, controller.deleteExperienceController);

module.exports = router;