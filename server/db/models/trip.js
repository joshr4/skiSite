const Sequelize = require('sequelize')
const db = require('../db')

const Trip = db.define('trip', {
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = Trip
