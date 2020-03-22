
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', [
    {
      id: '871f3836-cb44-4219-9808-e3f64df38ea3',
      name: 'Nodejs',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'c156d8d2-1b6e-48df-96e5-7ddb01371792',
      name: 'Reactjs',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '371520a2-86f7-4971-9945-3f4bb312155a',
      name: 'Redux',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('categories', null, {}),
};
