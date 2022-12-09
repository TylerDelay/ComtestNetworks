const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');


const Tickets = sequelize.define('tickets', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    defaultValue: 0,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'test',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: "",
    allowNull: false
  },
  newcolumn: {
    type: Sequelize.STRING,
    defaultValue: "",
    primaryKey: true
  }
});

module.exports = Tickets;