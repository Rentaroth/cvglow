const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createUtilityController);
router.get('/', controller.getUtilityController);
router.get('/:id', controller.getUtilityController);
router.put('/:id', controller.updateUtilityController);
router.delete('/:id', controller.deleteUtilityController);

module.exports = router;