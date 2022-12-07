const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.bringPersonalInfo);
router.get('/:id', controller.bringPersonalInfo);
router.post('/', controller.addPersonalInfo);
router.put('/:id', controller.modifyPersonalInfo);
router.delete('/:id', controller.erasePersonalInfo);

module.exports = router;
