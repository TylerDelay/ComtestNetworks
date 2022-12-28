const Sequelize = require("sequelize-v5");
const sequelize = require("../connection");

//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth() + 1;

//combine the year and month into a single string to be concat with id to form etr_id
const yearMonth = year.toString().concat("-", month.toString(), "-ST");

const SubTaskTicket = sequelize.define("subTaskTicket", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
   primaryKey: true
  },
  etr_id: {
    type: Sequelize.STRING,
  // primaryKey: true,
    // defaultValue: ""
    allowNull: true,
    references: {
      model: 'tickets',
      key: 'etr_id'
    }
  },
  subTaskId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    defaultValue: "",
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
status: {
    type: Sequelize.STRING,
    defaultValue: "approved",
  },
  etr: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: yearMonth
  },
});

module.exports = SubTaskTicket;
