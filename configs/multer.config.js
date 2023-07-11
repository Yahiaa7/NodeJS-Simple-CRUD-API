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

const multerFilter = (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(extension)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PNG, JPG, and JPEG files are allowed.'));
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

module.exports = { upload, multer };