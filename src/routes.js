const {
  authorController, postController, commentController, fileController, categoryController,
} = require('./controller');

const routes = [
  authorController.routes(),
  postController.routes(),
  commentController.routes(),
  fileController.routes(),
  categoryController.routes(),
];

module.exports = routes;
