const multer = require('multer');
const path = require('path');

const configMulter = {
  dest: path.resolve(__dirname, '..', '..', 'upload'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'upload'));
    },
    filename: (req, file, cb) => {
      const fullName = `${Date.now()}_${file.originalname}`;
      req.fullName = fullName;
      cb(null, fullName);
    },
  }),
};

module.exports = configMulter;
