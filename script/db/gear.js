const {Gear} = require('../../server/db/models')

const seedGear = Promise.all([
  Gear.create({
    name: 'Powder',
    description: 'grandpas ski, they are banged up',
    type: 'ski',
    userId: 1,
    warehouseId: 1
  }),
  Gear.create({
    name: 'Johnnys board',
    description: 'bday gift 2015, last waxes 2017',
    type: 'snowboard',
    userId: 1,
    warehouseId: 1
  }),
  Gear.create({
    name: 'best skis ever',
    description: 'fast skis',
    type: 'ski',
    userId: 1,
    warehouseId: 1
  }),
])

module.exports = seedGear
