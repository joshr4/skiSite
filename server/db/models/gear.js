const Sequelize = require('sequelize')
const db = require('../db')

const Gear = db.define('gear', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM,
    allowNull: false,
    values: ['ski', 'snowboard', 'other']
  }
})

module.exports = Gear
