const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createExperienceController);
router.get('/', controller.getExperienceController);
router.get('/:id', controller.getExperienceController);
router.put('/:id', controller.updateExperienceController);
router.delete('/:id', controller.deleteExperienceController);

module.exports = router;