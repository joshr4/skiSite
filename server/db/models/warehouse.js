const Sequelize = require('sequelize')
const db = require('../db')

const Warehouse = db.define('warehouse', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Warehouse
