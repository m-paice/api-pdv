const { authorController, postController } = require('./controller');

const routes = [
  authorController.routes(),
  postController.routes(),
];

module.exports = routes;
