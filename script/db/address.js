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
  Address.create({
    fullName: 'Warehouse Bob',
    streetline1: '123 Main Street',
    streetline2: null,
    city: 'Denver',
    zipcode: '00001',
    state: 'CO',
    country: 'USA',
  }),
  Address.create({
    fullName: 'Snowboard Sam',
    streetline1: '123 Breck Street',
    streetline2: null,
    city: 'Breckenridge',
    zipcode: '00002',
    state: 'CO',
    country: 'USA',
  }),
  Address.create({
    fullName: 'Dave',
    streetline1: '789 Downtown Street',
    streetline2: null,
    city: 'Denver',
    zipcode: '00003',
    state: 'CO',
    country: 'USA',
  }),
  Address.create({
    fullName: 'Bryan',
    streetline1: '456 Iowa Street',
    streetline2: null,
    city: 'Iowa City',
    zipcode: '00004',
    state: 'IA',
    country: 'USA',
  }),
])

module.exports = seedAddress
