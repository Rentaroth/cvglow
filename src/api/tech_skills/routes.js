const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createTechSkillsController);
router.get('/', controller.getTechSkillsController);
router.get('/:id', controller.getTechSkillsController);
router.put('/:id', controller.updateTechSkillsController);
router.delete('/:id', controller.deleteTechSkillsController);

module.exports = router;