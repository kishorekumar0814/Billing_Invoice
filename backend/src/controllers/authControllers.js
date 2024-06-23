// src/controllers/authController.js
const passport = require('passport');

module.exports = {
  googleAuth: passport.authenticate('google', {
    scope: ['profile', 'email']
  }),

  googleAuthCallback: passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/dashboard'
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  },

  getCurrentUser: (req, res) => {
    res.send(req.user);
  }
};
