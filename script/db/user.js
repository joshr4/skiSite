const {User} = require('../../server/db/models')

const seedUsers = Promise.all([
  User.create({
    email: 'codyyyyy@email.com',
    password: '123'
  }),
  User.create({
    email: 'murphyyyyy@email.com',
    password: '123'
  })
])

module.exports = seedUsers
