				var express = require('express');
				var passport = require('passport'); 
				var Account = require('../models/account');
				var map = require ('map');
				var Cave = require ('../map/map');
				var router = express.Router();

				router.get('/', function (req, res) {
				  res.render('index', { user : req.user });
				});

				router.get('/register', function(req, res) {
				  if ( req.session.passport.user != null ) {
				    res.redirect('/');
				  } else {
				    res.render('register', {
				      title : 'Sign-up'
				    });
				  }
				});

				router.post('/register', function(req, res, next) {
				  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
				    if (err) {
				      return res.render('register', { error : err.message });
				    }

				    passport.authenticate('local')(req, res, function () {
				      req.session.save(function (err) {
				        if (err) {
				          return next(err);
				        }
				        res.redirect('/');
				      });
				    });
				  });
				});

				router.get('/login', function(req, res) {
				  if ( req.session.passport.user != null ) {
				    res.redirect('/');
				  } else {
				    res.render('login', {
				      user : req.user,
				      title : 'Sign-in',
				      subTitle : 'Come back please !'
				    });
				  }
				});

				router.post('/login', passport.authenticate('local'), function(req, res) {
				  if ( req.session.passport.user != null ) {
				    res.redirect('/');
				  } else {
				    res.redirect('/register');
				  }
				});

				router.get('/logout', function(req, res) {
				  if ( req.session.passport.user != null ) {
				    req.logout();
				    res.redirect('/');
				  }
				  else {
				    res.redirect('/')
				  }
				});


				module.exports = router;