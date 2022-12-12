const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");

//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth();

//combine the year and month into a single string to be concat with id to form ETR_ID
const yearMonth = year.toString().concat("-", month.toString() + 1, "-ST");

const SubTaskTicket = sequelize.define("subTaskTicket", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
   primaryKey: true,
   references: {
    model: 'tickets',
    key: 'id'
  }
  },
  ETR_ID: {
    type: Sequelize.STRING,
  // primaryKey: true,
    // defaultValue: ""
    allowNull: true,
    references: {
      model: 'tickets',
      key: 'ETR_ID'
    }
  },
  // },
  // subTaskId: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   defaultValue: "",
  //   primaryKey: true
  // },
  Title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Status: {
    type: Sequelize.CHAR,
    allowNull: false
  },
  ETR: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: yearMonth
  },
});

module.exports = SubTaskTicket;
