const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

const Activity = sequelize.define('activity', {
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  parent_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: ""
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
	field:{
        type: Sequelize.STRING,
        allowNull: false

    },
	add_change_delete:{
        type: Sequelize.STRING,
        allowNull: false

    },
	value_before:{
        type: Sequelize.STRING,
        allowNull: false

    },
	value_after:{
        type: Sequelize.STRING,
        allowNull: false

    }
});

module.exports = Activity;