const {
  authorController, postController, commentController, fileController,
} = require('./controller');

const routes = [
  authorController.routes(),
  postController.routes(),
  commentController.routes(),
  fileController.routes(),
];

module.exports = routes;
