'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('users', [
      {
        name: 'Patrick',
        email: 'patrick@email.com',
        saldo : 10,
        waktuMasuk: '2020-12-04 6:00:00', 
        waktuKeluar: '2020-12-04 7:00:00',

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christian',
        email: 'christian@email.com',
        saldo : 20,
        waktuMasuk: '2020-12-04 7:00:00', 
        waktuKeluar: '2020-12-04 8:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Evan',
        email: 'evan@email.com',
        saldo : 30,
        waktuMasuk: '2020-12-04 8:00:00', 
        waktuKeluar: '2020-12-04 9:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {})
  }
};
