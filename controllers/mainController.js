const express = require('express');
const router = express.Router();
const db = require('../models')

// New User Route
router.get('/form', (req, res) => {
  res.render('form');
});

// Create User Route
router.post('/confirmation', (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    console.log(newUser);
    res.render('confirmation', {
      user: newUser
    });
  })
})

//to be deleted
router.get('/confirmation', (req, res) => {
  res.render('confirmation', {
    user: {firstName: 'Abdel'}
  })
})

router.get('/dashboard', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) console.log(err);

        res.render('dashboard', {
            users: allUsers
        })
    })
})













module.exports = router;