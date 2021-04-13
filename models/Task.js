
const Sequelize = require('sequelize')
const sequelize = require('../database')

const Task = sequelize.define('tasks', {
        title           : {
            type        : Sequelize.STRING,
            field       : 'title'
        },
        description     : {
            type        : Sequelize.TEXT,
            field       : 'description'
        },
        user_id         : {
            type        : Sequelize.INTEGER,
            field       : 'user_id'
        },
        project_id      : {
            type        : Sequelize.INTEGER,
            field       : 'project_id'
        },
        completed       : {
            type        : Sequelize.BOOLEAN,
            field       : 'completed',
            allowNull   : false,
            defaultValue: false
        }
    }, 
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        scopes: {
            completed: {
                where: {
                    completed: true
                }
            },
        }
    }
)

module.exports = Task