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
		allowNull: true
    },
	 etr_level: {
        type: Sequelize.STRING,
        allowNull: true
    },
	 parent_etr: {
        type: Sequelize.STRING,
        allowNull: true 
    },	
    title: {
        type: Sequelize.STRING,
        allowNull: true

    },
    description:{
        type: Sequelize.STRING,
        allowNull: true

    },
	etr_type:{
        type: Sequelize.STRING,
        allowNull: true

    },
	etr_subtype:{
        type: Sequelize.STRING,
        allowNull: true

    },
	eng_family:{
        type: Sequelize.INTEGER,
        allowNull: true

    },
	eng_family_model:{
        type: Sequelize.INTEGER,
        allowNull: true

    },
	reporter:{
        type: Sequelize.STRING,
        allowNull: true

    },
	requestor_source:{
        type: Sequelize.STRING,
        allowNull: true

    },
	requestor:{
        type: Sequelize.STRING,
        allowNull: true

    },
	customer:{
        type: Sequelize.STRING,
        allowNull: true

    },
	assigned_to:{
        type: Sequelize.STRING,
        allowNull: true

    },
	modified_by:{
        type: Sequelize.STRING,
        allowNull: true

    },
	priority:{
        type: Sequelize.STRING,
        allowNull: true

    },
	status:{
        type: Sequelize.STRING,
        allowNull: false

    },
	sub_status:{
        type: Sequelize.STRING,
        allowNull: true

    },
	resolution:{
        type: Sequelize.STRING,
        allowNull: true

    },
	rec_type:{
        type: Sequelize.STRING,
        allowNull: true

    },
	eco_record:{
        type: Sequelize.STRING,
        allowNull: true

    },
	child_etr_list:{
        type: Sequelize.STRING,
        allowNull: true

    },
	check_list:{
        type: Sequelize.STRING,
        allowNull: true

    },
	// comments:{
    //     type: Sequelize.STRING,
    //     allowNull: true

    // },
	label:{
        type: Sequelize.STRING,
        allowNull: true

    },
	etr_dependency:{
        type: Sequelize.STRING,
        allowNull: true

    },
	etr_duplicate:{
        type: Sequelize.STRING,
        allowNull: true

    },
	etr_attachment:{
        type: Sequelize.STRING,
        allowNull: true

    },
    etr: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: yearMonth 
    }

    

});

module.exports = Tickets; 