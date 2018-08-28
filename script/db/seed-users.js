const faker = require('faker');
const axios = require('axios');
const chance = require('chance')(123)

// const toonAvatar = require('cartoon-avatar');
const Promise = require('bluebird');
const db = require('../../server/db');
const {
  User,
  Address
} = require('../../server/db/models');
const addresses = require('./addresses')

// console.log('this is addresses', addresses)
const numUsers = 200;

function doTimes(n, fn) {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
}

// async function geocode(addresses) {

//   for (let i = 0; i < addresses.length; i++) {

//     let park = addresses[i];

//     let location = park.line_1 + ' ' + park.city + ' ' + park.state;

//     let tempResult;

//     await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//       params: {
//         address: location,
//         key: 'AIzaSyCcL9Cp8Qdi3dT9U5Iimud0LcDowumqomY'
//       }
//     }).then(res => res.data.results.forEach(result => {
//       let tempLocation = {
//         lat: (Math.round(result.geometry.location.lat * 10000000) / 10000000),
//         lng: (Math.round(result.geometry.location.lng * 10000000) / 10000000)
//       };


//       tempResult = tempLocation
//       console.log(tempResult)
//       addresses[i].location = tempResult
//     }))
//   }
// }

function generateAddresses(locations) {
  let createdAddresses = locations.map(address => Address.create(address))
  return Promise.all(createdAddresses)
}



function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randUser(possibleAddresses) {
  const start = randomIndex(possibleAddresses.length - 1)
  const addressId = possibleAddresses.splice(start, 1)[0].id;
  const user = {
    password: '123',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    imageUrl: faker.image.avatar(),
    addressId
  };
  user.email = `${user.firstName}.${user.lastName}@gmail.com`;
  return User.build(user);
}


function generateUsers(userAddresses) {
  const users = doTimes(numUsers, () => randUser(userAddresses));
  // console.log(userAddresses)
  users.push(
    User.build({
      firstName: 'Daniel',
      lastName: 'Simandl',
      imageUrl: faker.image.avatar(),
      email: `dan@dan.com`,
      password: '123',
      addressId: userAddresses.splice(0, 1)[0].id,
    })
  );
  users.push(
    User.build({
      firstName: 'Josh',
      lastName: 'Remaley',
      imageUrl: faker.image.avatar(),
      email: `josh@josh.com`,
      password: '123',
      addressId: userAddresses.splice(0, 1)[0].id,
    })
  );
  users.push(
    User.build({
      firstName: 'Ricky',
      lastName: 'Li',
      imageUrl: faker.image.avatar(),
      email: `ricky@ricky.com`,
      password: '123',
      addressId: userAddresses.splice(0, 1)[0].id,
    })
  );
  users.push(
    User.build({
      firstName: 'Matthew',
      lastName: 'Chan',
      imageUrl: faker.image.avatar(),
      email: `matt@matt.com`,
      password: '123',
      addressId: 341,
    })
  );
  users.push(
    User.build({
      firstName: 'Kevin',
      lastName: 'OMalley',
      imageUrl: faker.image.avatar(),
      email: `kevin@kevin.com`,
      password: '123',
      addressId: userAddresses.splice(0, 1)[0].id,
    })
  );
  users.push(
    User.build({
      firstName: 'Hugh',
      lastName: 'Mahn',
      imageUrl: 'https://holidaystocelebrate.files.wordpress.com/2012/07/human-and-dog-costume.jpg',
      email: `hugh@hugh.com`,
      password: '123',
      addressId: userAddresses.splice(0, 1)[0].id,
    })
  );
  return users;
}



function createUsers() {
  return Promise.map(generateAddresses(addresses).then(addressArray =>
    generateUsers(addressArray)), users => users.save());
}

function seed() {
  console.log('Syncing users');
  // let resultHolder = geocode(addresses)
  //   .then(() => {
  //     let createUsersholder = createUsers(addresses)
  //     return createUsersholder
  //   })
  return createUsers();
}

module.exports = seed
