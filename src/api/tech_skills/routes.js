const router = require('express').Router();
const auth = require('../../services/auth').verifyToken;
const controller = require('./controller');
const adminPerm = require('../../services/admin').adminPermission;

router.post('/', auth, controller.createTechSkillsController);
router.get('/', auth, controller.getTechSkillsController);
router.get('/:id', auth, controller.getTechSkillsController);
router.put('/:id', auth, controller.updateTechSkillsController);
router.delete('/:id', auth, controller.deleteTechSkillsController);

module.exports = router;