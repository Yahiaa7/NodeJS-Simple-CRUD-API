const multer = require('multer');
const path = require('path');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        file.ext = ext;
        cb(null, `item-${Date.now()}.${ext}`);
    },
});

const upload = multer({
    storage: multerStorage
});

module.exports = { upload, multer };