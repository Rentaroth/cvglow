const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createEducationController);
router.get('', controller.getEducationController);
router.get('/:id', controller.getEducationController);
router.put('/:id', controller.updateEducationController);
router.delete('/:id', controller.eraseEducationController);

module.exports = router;