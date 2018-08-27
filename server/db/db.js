const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize({
  database: databaseName,
  username: process.env.DATABASE_USER || null,
  password: process.env.DATABASE_PASSWORD || null,
  dialect: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  logging: false
})
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
