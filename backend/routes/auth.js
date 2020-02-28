const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Favorite= require('../models/Favorite');
// Require 2do modelo
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')
//Ejecuta metodo post, hacia la ruta signup
router.post('/signup', (req, res, next) => {
//Manda el formulario para crear el usuario  
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  // Para traer otro modelo revisar memes ln 19 routes - auth
  res.status(200).json({ user });
});
// Al utilizar esta routa, por medio del middleware te redirige a home
router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});
// Ruta de perfil en donde debes estar logeado/autentificado para acceder
router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
//    .populate(segundo modelo)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});
//Upload Routes/auths linea 43
router.post(
  '/upload',
  isAuth,
  uploadCloud.single('imageURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { photoURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)
//Create Routes/auths linea 57
router.post('/create', isAuth, async (req, res, next) => {
  const { name, imageURL,description } = req.body
  const { _id } = req.user
  const card = await Card.create({ name, imageURL, description })
  const cardPopulated = await Card.findById(card._id).populate('author')
  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { cards: card._id } },
    { new: true }
  ).populate({
    path: 'card',
    populate: {
      path: 'author',
      model: 'User'
    }
  })
  return res.status(201).json({ user, card: cardPopulated })
})
//Read Routes/auths linea 76
router.get('/cards', async (req, res, next) => {
  const favorites = await Favorite.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ favorites })
})
//Delete pero tu investgale
router.get('/favorites/:id', async (req, res, next) => {
  const {id} = req.params;
  const favorite = await Favorite.findById(id)
  res.status(200).json(card)
})
router.patch('/favorites/:id', async(req, res, next) => {
  const {id} = req.params
  const {name,description} = req.body
  await Favorite.findByIdAndUpdate(id, {
    name, description, 
  })
  res.status(200).json({message: "favorite update"})
})
router.delete('/favorites/:id', async(req, res, next) => {
  const {id} = req.params
  await Favorite.findByIdAndDelete(id)
  res.status(200).json({ message: "favorite delete"})
})
module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }
