const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.createLanguagesController);
router.get('/', controller.getLanguagesController);
router.get('/:id', controller.getLanguagesController);
router.put('/:id', controller.updateLanguagesController);
router.delete('/:id', controller.deleteLanguagesController);

module.exports = router;