const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Business= require('../models/Business');
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
  uploadCloud.single('photoUrl'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { photoUrl: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)

//funcion para subir foto
router.post('/uploadImage', isAuth, uploadCloud.single('imageURL'),
async (req, res) => {
  const { secure_url } = req.file 
  const business = await Business.findByIdAndUpdate(
    {imageURL: secure_url},
    { new: true }
  )
  res.status(200).json({business})
}
)

router.post('/profile/create', isAuth, uploadCloud.single('imageURL'),async (req, res) => {
  const { name,description, address, phone } = req.body
  const { secure_url: imageURL} = req.file
  const { _id } = req.user
  const business = await Business.create({ name, imageURL, description, address, phone, author: _id })
  const businessPopulated = await Business.findById(business._id).populate('author')
  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { business: business._id } },
    { new: true }
  ).populate({
    path: 'business',
    populate: {
      path: 'author',
      model: 'User'
    }
  })
  return res.status(201).json({ user, business: businessPopulated })
})


//CRUD Business model
// router.post('/create', isAuth, async (req, res, next) => {
//   const { name, imageURL,description } = req.body
//   const { _id } = req.user
//   const business = await Business.create({ name, imageURL, description, address, phone })
//   const businessPopulated = await Business.findById(business._id).populate('author')
//   const user = await User.findByIdAndUpdate(
//     _id,
//     { $push: { cards: card._id } },
//     { new: true }
//   ).populate({
//     path: 'card',
//     populate: {
//       path: 'author',
//       model: 'Business'
//     }
//   })
//   return res.status(201).json({ user, business: businessPopulated })
// })
//Read Routes/auths linea 76
router.get('/profile/myBusiness', async (req, res, next) => {
  const businesses = await Business.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ businesses })
})

router.get('/businesses/:id', async (req, res, next) => {
  const {id} = req.params;
  const business = await Business.findById(id)
  res.status(200).json(business)
})
router.patch('/businesses/:id', async(req, res, next) => {
  const {id} = req.params
  const {name,description} = req.body
  await Business.findByIdAndUpdate(id, {
    name, description, 
  })
  res.status(200).json({message: "business update"})
})
router.delete('/businesses/:id', async(req, res, next) => {
  const {id} = req.params
  await Business.findByIdAndDelete(id)
  res.status(200).json({ message: "business delete"})
})










module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
  }
