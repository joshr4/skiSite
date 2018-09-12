const {
  Mountain
} = require('../../server/db/models')

const seedMountains = Promise.all([
  Mountain.create({
    name: 'Breckenridge',
    capacity: 40,
    addressId: 7,
    capacity: 109,
    dropoffTime: new Date(Date.UTC(2018, 11, 4)),
    pickupTime: new Date(Date.UTC(2018, 11, 4))
  }),
  Mountain.create({
    name: 'Vail',
    capacity: 40,
    addressId: 8,
    capacity: 220,
    dropoffTime: new Date(Date.UTC(2018, 11, 4)),
    pickupTime: new Date(Date.UTC(2018, 11, 4)),
  }),
])

module.exports = seedMountains
