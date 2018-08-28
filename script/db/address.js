const {Address} = require('../../server/db/models')

const seedAddress = Promise.all([
  Address.create({
    fullName: 'Josh Remaley',
    streetline1: '3029 N Kenmore Ave',
    streetline2: 'Apt 1',
    city: 'Chicago',
    zipcode: '60657',
    state: 'IL',
    country: 'USA',
  }),
  Address.create({
    fullName: 'Maggie S',
    streetline1: '5416 W Pensacola Ave',
    streetline2: null,
    city: 'Chicago',
    zipcode: '60641',
    state: 'IL',
    country: 'USA',
  }),
])

module.exports = seedAddress
