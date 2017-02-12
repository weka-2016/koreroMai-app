const express = require("express")
const route = express.Router()
const bcrypt = require('bcryptjs')
const session = require('express-session')


module.exports = function(db) {


  route.post('/register', confirmUniqueEmail, postNewUser)
  route.post('/login', loginUser)


  function postNewUser(req, res, next) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        req.body.password = hash
        db.addUser('users', req.body)
        .then((user) => {
          res.json({isUser:true, error: null, user: user[0]})
        })
      })
    })
  }


  function loginUser(req, res, next) {

    db
    .findUserByEmail('users', req.body.email)
    .first()
    .then((user) => {
      if(!user) {
        return res.json({isUser: false, error:'This does not exist'})
      }

      bcrypt.compare(req.body.password, user.password, (error, match) => {
        if (match) {
          req.session.isAuthenticated = true
          res.json({isUser: true})
        }  else {
          res.json({isUser: false, error: 'Invalid email or password'})
        }
      })
      
    })
  }

  function isAuthenticated(req, res, next){
    if(req.session.isAuthenticated === true){
      alert('You are logged in')
    } else {
      res.redirect('/login-register')
      alert('Please register to use this site')
    }
  }

  function confirmUniqueEmail(req, res, next) {
    db.findUserByEmail('users',req.body.email)
    .then((user) => {
        console.log('user:', user);
      if(!user[0]) {
        next()
      } else {
        res.json({isUser: false, error: 'Email already exists'})
      }
    })
  }

  return route;
};


    // console.log('resources.js req.body.email', req.body.email)
