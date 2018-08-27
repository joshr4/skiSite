const router = require('express').Router();
const User = require('../db/models/user');
const passport = require('passport');
const {
  Address,
  Pet
} = require('../db/models/');

module.exports = router;

router.post('/login', (req, res, next) => {
  User.findOne({
      where: {
        email: req.body.email,
      },
      include: [{model: Pet, as: 'pets'}, {model: Address}],
    })
    .then(user => {
      if (!user) {
        console.log('No such user found:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else if (!user.correctPassword(req.body.password)) {
        console.log('Incorrect password for user:', req.body.email);
        res.status(401).send('Wrong username and/or password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => (err ? next(err) : res.json(user)));
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
      }
    });
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/me', (req, res) => {
  if (req.user) {
    User.findOne({
      where: {
        id: req.user.id,
      }
    }).then(user => {
      res.json(user);
    });
  } else {
    res.json(req.user);
  }
});

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: 'email',
  })
);

router.use('/google', require('./google'));
