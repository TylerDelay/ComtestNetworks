const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');


//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth()+1;

//combine the year and month into a single string to be concat with id to form etr_id
const yearMonth = year.toString().concat('-', month.toString(),'-');

const Tickets = sequelize.define('tickets', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
    etr_cat:{
        type: Sequelize.STRING,
        allowNull: false
    },
    etr_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: ""
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    description:{
        type: Sequelize.STRING,
        allowNull: false

    },
    etr: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: yearMonth
    }
});

module.exports = Tickets;