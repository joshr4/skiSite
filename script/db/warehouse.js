const {Warehouse} = require('../../server/db/models')

const seedWarehouse = Promise.all([
  Warehouse.create({
    name: 'Downtown Denver',
    addressId: 1,
    capacity: 109,
  }),
  Warehouse.create({
    name: 'Fort Collins',
    addressId: 1,
    capacity: 220,
  }),
  Warehouse.create({
    name: 'Seattle',
    addressId: 1,
    capacity:244,
  }),
])

module.exports = seedWarehouse
