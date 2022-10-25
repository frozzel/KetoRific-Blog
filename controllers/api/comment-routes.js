const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

//// Post Comments//////

router.post('/', withAuth, async (req, res)=>{try{newCom= await Comment.create({...req.body, userId: req.session.userId,}); res.json(newCom)}catch(err){res.status(500).json(err)}});

module.exports= router;