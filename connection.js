const Sequelize = require('sequelize-v5');
const dbConfig = require('./config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: 'mysql',
  host: dbConfig.HOST
});

module.exports = sequelize;