
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('authors', [
    {
      id: 'e14d3002-7f9f-47f7-aae8-535c2fa7f9f2',
      name: 'Matheus Paice',
      bio: 'eu sou o matheus',
      username: 'paice',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '381ef42d-1bf9-4410-84c7-087173c95bfd',
      name: 'Marina Paice',
      bio: 'eu sou a Marina',
      username: 'marina',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('authors', null, {}),
};
