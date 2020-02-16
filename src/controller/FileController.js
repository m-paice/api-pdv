const multer = require('multer');

const BaseController = require('./BaseController');
const fileResource = require('../resource/FileResource');
const configMulter = require('../middleware/multer');

class FileController extends BaseController {
  constructor() {
    super(fileResource, 'files');
  }

  // eslint-disable-next-line class-methods-use-this
  async createFile(req, res) {
    const { type, authorId = null, postId = null } = req.body;
    const { mimetype, filename, originalname } = req.file;

    try {
      const response = await fileResource.create({
        type,
        name: filename,
        originalName: originalname,
        mimeType: mimetype.split('/')[0],
        extension: mimetype.split('/')[1],
        authorId,
        postId,
      });
      return res.json(response);
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  routes() {
    const routes = super.routes();

    routes.post('/file', multer(configMulter).single('file'), this.createFile.bind(this));

    return routes;
  }
}

module.exports = new FileController();
