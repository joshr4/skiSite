const {
  Trip
} = require('../../server/db/models')

//Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
//month is 0-11

const seedTrips = Promise.all([
  Trip.create({
    startDate: new Date(Date.UTC(2018, 10, 10)),
    endDate: new Date(Date.UTC(2018, 10, 13)),
    userId: 1,
    mountainId: 1,
  }),
  Trip.create({
    startDate: new Date(Date.UTC(2018, 11, 1)),
    endDate: new Date(Date.UTC(2018, 11, 4)),
    userId: 1,
    mountainId: 2,
  }),
  Trip.create({
    startDate: new Date(Date.UTC(2018, 11, 14)),
    endDate: new Date(Date.UTC(2018, 11, 15)),
    userId: 1,
    mountainId: 2,
  }),
  Trip.create({
    startDate: new Date(Date.UTC(2018, 11, 21)),
    endDate: new Date(Date.UTC(2018, 11, 21)),
    userId: 2,
    mountainId: 1,
  }),
  Trip.create({
    startDate: new Date(Date.UTC(2018, 10, 10)),
    endDate: new Date(Date.UTC(2018, 10, 11)),
    userId: 2,
    mountainId: 1,
  }),
  Trip.create({
    startDate: new Date(Date.UTC(2018, 11, 29)),
    endDate: new Date(Date.UTC(2018, 11, 31)),
    userId: 2,
    mountainId: 2,
  }),
])

module.exports = seedTrips
