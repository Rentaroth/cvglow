const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');

router.post('/', auth, controller.createSkillsController);
router.get('/', auth, controller.getSkillsController);
router.get('/:id', auth, controller.getSkillsController);
router.put('/:id', auth, controller.updateSkillsController);
router.delete('/:id', auth, controller.deleteSkillsController);

module.exports = router;