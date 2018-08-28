const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  streetline1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  streetline2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Zipcode required"
      },
      len: {
        args: [5],
        msg: "Zipcode must be 5 digits"
      }
    }
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Address
