const Sequelize = require('sequelize')
const db = require('../db')

const Mountain = db.define('mountain', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dropoffTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  pickupTime: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Mountain
