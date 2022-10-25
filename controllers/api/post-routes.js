const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

/// make stuff ;0//////////

router.post('/', withAuth, async(req, res)=>{body= req.body; try{newPo= Post.create({...body, userId: res.session.userId}); res.json(newPo)}catch (err){res.status(500).json(err)}});

/// update stuff////

router.put('/:id', withAuth, async(req, res)=>{try { [userCards]= await Post.update(req.body, {where: {id: req.params.id,}}); if (userCards> 0){res.status(200).end()}else{res.status(404).end()}}catch (err){res.status(500).json(err)}});

//////// Destroy stufffff Rarrrrr////////
 
router.delete('/:id', withAuth, async (req, res)=>{try { [userCards]= Post.destroy({where:{id: req.params.id,}}); if (userCards > 0){res.status(200).end()}else {res.status(404).end()}}catch (err){res.status(500).json(err)}});

module.exports= router;
