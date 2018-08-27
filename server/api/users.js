const router = require('express').Router()
const {
  User
} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!

      attributes: ['id', 'email', 'fullName', 'firstName', 'lastName', 'imageUrl'],
      include: [{
        all: true
      }],
    })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/simple/:id', (req, res, next) => {
  User.findOne({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!


      attributes: ['id', 'fullName', 'firstName', 'lastName', 'email', 'imageUrl', 'description'],
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Pet,
          required: false,
          as: 'pets'
        },
      ]
    })
    .then(user => res.json(user))
    .catch(next)
})
