const { authorController, postController, commentController } = require('./controller');

const routes = [
  authorController.routes(),
  postController.routes(),
  commentController.routes(),
];

module.exports = routes;
