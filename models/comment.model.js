const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

const Comment = sequelize.define('comments', {
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
	checklist_id:{
        type: Sequelize.STRING,
        allowNull: false

    },
	user:{
        type: Sequelize.STRING,
        allowNull: false

    },
	comment:{
        type: Sequelize.STRING,
        allowNull: false

    }
});

module.exports = Comment;