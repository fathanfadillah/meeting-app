
const Sequelize = require('sequelize')
const sequelize = require('../database')

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    saldo: {
        type: Sequelize.INTEGER,
        field:'saldo'
    },
    waktuMasuk: {
        type: Sequelize.DATE,
        field:'waktuMasuk',
        defaultValue: 'CURRENT_TIMESTAMP'
    },
    waktuKeluar: {
        type: Sequelize.DATE,
        field:'waktuKeluar',
        defaultValue: 'CURRENT_TIMESTAMP'
    }
},
    {
        freezeTableName: false, // Model tableName will be the same as the model name
    }
)

module.exports = User