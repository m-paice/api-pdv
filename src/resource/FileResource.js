const BaseResource = require('./BaseResouce');
const FileRepository = require('../repository/FileRepository');

class FileResource extends BaseResource {
  constructor() {
    super(FileRepository);
  }
}

module.exports = new FileResource();
