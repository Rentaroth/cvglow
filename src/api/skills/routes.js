const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createSkillsController);
router.get('/', controller.getSkillsController);
router.get('/:id', controller.getSkillsController);
router.put('/:id', controller.updateSkillsController);
router.delete('/:id', controller.deleteSkillsController);

module.exports = router;