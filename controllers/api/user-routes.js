const router = require('express').Router();
const { User } = require('../../models/');

///// new user /////
router.post('/', async(req, res)=>{try{nUser = await User.create({username: req.body.username, password: req.body.password,}); req.session.save(()=>{req.session.userId= nUser.id; req.session.username=nUser.username; req.session.loggedIn = true; res.json(nUser)})}catch (err){res.status(500).json(err)}});

///// login ///////
router.post('/login', async(req, res)=>{try{user=await User.findOne({where: {username: req.body.username,}}); if (!user){res.status(400).json({message: 'User Acount Not Found!'})}validPass=user.checkPassword(req.body.password); if (!validPass){res.status(400).json({message: "Password Incorrect!"})}; req.session.save(()=>{req.session.userId=user.id; req.session.username= user.username; req.session.loggedIn=true;res.json({user, message: "Login Succsesfull!"})})}catch (err){res.status(400).json ({message: 'No Username or Password Found!'})}});

/// logout/////////
router.post('/logout', (req, res)=>{if (req.session.loggedIn){req.session.destroy(()=>res.status(204).end())}else{res.status(404).end()}});

module.exports= router;