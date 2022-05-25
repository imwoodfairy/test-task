const Router = require('express');
const router = new Router();
const cityRouter = require('./cityRouter');

router.use('/cities', cityRouter);

module.exports = router