const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createReferenceController);
router.get('/', controller.getReferenceController);
router.get('/:id', controller.getReferenceController);
router.put('/:id', controller.updateReferenceController);
router.delete('/', controller.deleteReferenceController);

module.exports = router;