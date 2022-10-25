const router = require('express').Router();
const postRot= require('./post-routes');
const userRot= require('./user-routes');
const comRot= require('./comment-routes');

router.use('/post',postRot);
router.use('/user', userRot);
router.use('/comment', comRot);

module.exports= router;