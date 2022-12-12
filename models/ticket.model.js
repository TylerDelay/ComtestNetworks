const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');


//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth()+1;

//combine the year and month into a single string to be concat with id to form ETR_ID
const yearMonth = year.toString().concat('-', month.toString(),'-');

const Tickets = sequelize.define('tickets', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
    ETR_CAT:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ETR_ID: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: ""
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    Description:{
        type: Sequelize.STRING,
        allowNull: false

    },
    ETR: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: yearMonth
    }
    // },
    // subTaskId: {
    //     type: Sequelize.STRING,
    //     allowNull:true,
    // references: {
    //     model: 'subtaskticket',
    //     key: 'subTaskId'
    //   }
    // }
});

module.exports = Tickets;