const router = require('express').Router();
const apiRot= require('./api/');
const homeRot= require('./home-routes.js');
const dashRot= require('./dashboard-routes.js');

router.use('/api', apiRot);
router.use('/', homeRot);
router.use('/dashboard', dashRot);

module.exports= router;