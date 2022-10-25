const router = require('express').Router();
const {Post, Comment, User}= require('../models/');



//// get stufff////////////////

router.get('/', async (req, res)=>{try{pdata = await Post.findAll({include: [User],}); posts= pdata.map((post)=> post.get({plain: true})); res.render('allPosts', {posts})}catch (err){res.status(500).json(err)}});

////// get ids ///////////

router.get('/post/:id', async (req, res)=>{try{pdata= await Post.findByPk(req.params.id, {include: [User, {model: Comment, include: [User]},]}); if (pdata){post=pdata.get({plain: true}); res.render('singlePost', {post})} else{res.status(404).end()}} catch{(err); {res.status(500).json(err)}}});

///// login ////////

router.get('/login', (req, res)=>{ if (req.session.loggedIn){res.redirect('/')}res.render('login')});

////// sign up //////

router.get('/signup', (req, res)=>{ if (req.session.loggedIn){res.redirect('/')}});

module.exports= router;