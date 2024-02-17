const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./achievementImages");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    return cb(null, uniqueName + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
