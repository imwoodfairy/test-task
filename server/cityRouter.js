const Router = require('express');
const router = new Router();
const controller = require('./controller');


router.get('/:name', controller.get);


module.exports = router;