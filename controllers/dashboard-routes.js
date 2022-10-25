const router = require('express').Router();
const {Post, Comment, User}= require('../models/');

const withAuth = require('../utils/auth');

////// verify login and display users posts////////

router.get('/', withAuth, async(req, res)=>{ try{pData= await Post.findAll({where: {userId: req.session.userId}}); posts= pData.map((post)=> post.get({plain: true})); res.render('allPostsAdmin',{layout: 'dashboard', posts,})}catch (err){res.redirect('login')}});

router.get('/new', withAuth, async (req, res)=>{res.render('newPost', {layout: 'dashboard',})});

router.get('edit/id', withAuth, async(req, res)=>{try{pData= await Post.findByPk(req.params.id); if (pData){post= pData.get({plain: true}); res.render('editPost', {layout: 'dashboard', posts, })} else {res.status(404).end()}}catch (err){res.redirect('login')}});

module.exports= router;
