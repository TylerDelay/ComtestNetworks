const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

//create a new Date object with the current date and time
const date = new Date();

//combine the year and month into a single string to be concat with id to form etr_id
const yearMonth = `ETR-${date.getFullYear()}-${date.getMonth() + 1}-`;


const Comment = sequelize.define('comment', {
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
	checklist_id:{
        type: Sequelize.STRING,
        allowNull: true

    },
	user:{
        type: Sequelize.STRING,
        allowNull: true

    },
    tag:{
        type:Sequelize.STRING,
        allowNull: true
    },
	comment:{
        type: Sequelize.STRING,
        allowNull: true

    },
    etr: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: yearMonth 
    }
});

module.exports = Comment;