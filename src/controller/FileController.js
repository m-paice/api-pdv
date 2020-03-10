const multer = require('multer');

const BaseController = require('./BaseController');
const configMulter = require('../middleware/multer');
const fileResource = require('../resource/FileResource');
const authorResource = require('../resource/AuthorResource');

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

  // eslint-disable-next-line class-methods-use-this
  async update(req, res) {
    const { query } = req;
    const { id } = req.params;
    const { type, authorId = null, postId = null } = req.body;
    const { mimetype, filename, originalname } = req.file;

    try {
      const isFile = await fileResource.findById(id);

      if (!isFile) {
        return res.status(500).json({
          message: 'File not found',
        });
      }

      await fileResource.updateById(id, {
        type,
        name: filename,
        originalName: originalname,
        mimeType: mimetype.split('/')[0],
        extension: mimetype.split('/')[1],
        authorId,
        postId,
      });

      const response = await authorResource.findById(authorId, { ...query });

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
    // routes.put('/file/:id', multer(configMulter).single('file'), this.updateFile.bind(this));

    return routes;
  }
}

module.exports = new FileController();
