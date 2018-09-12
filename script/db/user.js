const {User} = require('../../server/db/models')

const seedUsers = Promise.all([
  User.create({
    email: 'cody@email.com',
    password: '123'
  }),
  User.create({
    email: 'murphy@email.com',
    password: '123'
  }),
  User.create({
    email: 'josh@email.com',
    password: '123'
  }),
  User.create({
    email: 'maggie@email.com',
    password: '123'
  })
])

module.exports = seedUsers
