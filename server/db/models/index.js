const User = require('./user')
const Address = require('./address')
const Mountain = require('./mountain')
const Warehouse = require('./warehouse')
const Gear = require('./gear')
const Trip = require('./trip')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Mountain.belongsTo(Address)
 Warehouse.belongsTo(Address)
 Gear.belongsTo(Warehouse, {as: 'homeWarehouse'})

 User.hasMany(Gear)
 User.hasMany(Address, {as: 'shippingAddress'})
 User.hasOne(Address, {as: 'defaultAddress'})
 User.hasMany(Trip)

 Trip.hasOne(Mountain)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Address,
  Mountain,
  Warehouse,
  Gear,
  Trip
}
