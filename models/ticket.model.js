const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');


//create a new Date object with the current date and time
const date = new Date();

//extract the year and month from the date
const year = date.getFullYear();
const month = date.getMonth()+1;

//combine the year and month into a single string to be concat with id to form etr_id
const yearMonth = `ETR-${date.getFullYear()}-${date.getMonth() + 1}-`;

const Tickets = sequelize.define('tickets', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
    etr_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: ""
    },
	alias_etr_id: {
         type: Sequelize.INTEGER,
		allowNull: false
    },
	 etr_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
	 parent_etr: {
        type: Sequelize.STRING,
        allowNull: false
    },	
    title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    description:{
        type: Sequelize.STRING,
        allowNull: false

    },
	etr_type:{
        type: Sequelize.STRING,
        allowNull: false

    },
	etr_subtype:{
        type: Sequelize.STRING,
        allowNull: false

    },
	eng_family:{
        type: Sequelize.INTEGER,
        allowNull: false

    },
	eng_family_model:{
        type: Sequelize.INTEGER,
        allowNull: false

    },
	reporter:{
        type: Sequelize.STRING,
        allowNull: false

    },
	requestor_source:{
        type: Sequelize.STRING,
        allowNull: false

    },
	requestor:{
        type: Sequelize.STRING,
        allowNull: false

    },
	customer:{
        type: Sequelize.STRING,
        allowNull: false

    },
	assigned_to:{
        type: Sequelize.STRING,
        allowNull: false

    },
	modified_by:{
        type: Sequelize.STRING,
        allowNull: false

    },
	priority:{
        type: Sequelize.STRING,
        allowNull: false

    },
	status:{
        type: Sequelize.STRING,
        allowNull: false

    },
	sub_status:{
        type: Sequelize.STRING,
        allowNull: false

    },
	resolution:{
        type: Sequelize.STRING,
        allowNull: false

    },
	rec_type:{
        type: Sequelize.STRING,
        allowNull: false

    },
	eco_record:{
        type: Sequelize.STRING,
        allowNull: false

    },
	child_etr_list:{
        type: Sequelize.STRING,
        allowNull: false

    },
	check_list:{
        type: Sequelize.STRING,
        allowNull: false

    },
	comments:{
        type: Sequelize.STRING,
        allowNull: false

    },
	label:{
        type: Sequelize.STRING,
        allowNull: false

    },
	etr_dependency:{
        type: Sequelize.STRING,
        allowNull: false

    },
	etr_duplicate:{
        type: Sequelize.STRING,
        allowNull: false

    },
	etr_attachment:{
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