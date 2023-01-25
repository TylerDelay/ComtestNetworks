const Sequelize = require('sequelize-v5');
const sequelize = require('../connection');

const Attachment = sequelize.define('attachment', {
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
	file:{
        type: Sequelize.STRING,
        allowNull: false

    },
	description:{
        type: Sequelize.STRING,
        allowNull: false

    },
	labels_tags:{
        type: Sequelize.STRING,
        allowNull: false

    },
	location:{
        type: Sequelize.STRING,
        allowNull: false

    }
});

module.exports = Attachment;