const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { studentClass } = req.body;
    return cb(null, `./studentsImages/${studentClass}`);
  },
  filename: function (req, file, cb) {
    return cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const uploadMultiple = multer({
  storage,
});

module.exports = uploadMultiple;
