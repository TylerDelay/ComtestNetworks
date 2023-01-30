const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth()+1;

//combine the year and month into a single string to be concat with id to form etr_id
const yearMonth = year.toString().concat('-', month.toString(),'-', );

const Checklist = sequelize.define('checklist', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  ticketId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
    etr_id: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: ""
    },
	checklist_group_id:{
        type: Sequelize.STRING,
        allowNull: false

    },
	 alias_group_id: {
         type: Sequelize.INTEGER,
		allowNull: false
    },
	list_id:{
        type: Sequelize.STRING,
        allowNull: false

    },
	title:{
        type: Sequelize.STRING,
        allowNull: false

    },
	modified_by:{
        type: Sequelize.STRING,
        allowNull: false

    },
	status:{
        type: Sequelize.STRING,
        allowNull: false

    },
	comments:{
        type: Sequelize.STRING,
        allowNull: false

    },
	assigned_to:{
        type: Sequelize.STRING,
        allowNull: false

    },
	link_new_etr:{
        type: Sequelize.STRING,
        allowNull: false

    }
});

module.exports = Checklist;