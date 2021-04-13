const Sequelize = require('sequelize')
const sequelize = require('../database')

const Project = sequelize.define('projects', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    user_id: {
      type: Sequelize.STRING,
      field: 'user_id'
    }
},
    {
        freezeTableName: false, // Model tableName will be the same as the model name
        classMethods: {
          associate: function(models) {
            // associations can be defined here
            Project.hasMany(models.Task)
          }
        }
    }
)

module.exports = Project