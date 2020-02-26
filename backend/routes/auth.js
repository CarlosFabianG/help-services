const express = require('express');
const router = express.Router();
const User = require('../models/User');
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

//Create Routes/auths linea 57

//Read Routes/auths linea 76

//Delete pero tu investgale

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
