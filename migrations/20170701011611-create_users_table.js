module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'users',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            saldo : Sequelize.INTEGER,
            waktuMasuk: Sequelize.DATE,
            waktuKeluar: Sequelize.DATE,
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropAllTables()
  }
}