// src/routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');


router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard');
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/auth/google', authController.googleAuth);

router.get('/auth/google/callback', authController.googleAuthCallback);

module.exports = router;
