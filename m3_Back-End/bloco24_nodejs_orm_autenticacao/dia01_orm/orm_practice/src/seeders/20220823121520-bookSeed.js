'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'P de Procrastinação',
        author: 'Billie Jean',
        page_quantity: null,
      }, {
        title: 'Memórias de Jena Claud pt. 1 de 52',
        author: 'Jena Claud',
        page_quantity: 2000,
      }, {
        title: 'Casa de Sape',
        author: 'Artu Aviar',
        page_quantity: 123,
      }, {
        title: 'Vila Antônio',
        author: 'Jorge Bolos',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
