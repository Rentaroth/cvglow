const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createAditionalsController);
router.get('/', controller.getAditionalsController);
router.get('/:id', controller.getAditionalsController);
router.put('/:id', controller.updateAditionalsController);
router.delete('/:id', controller.deleteAditionalsController);

module.exports = router;