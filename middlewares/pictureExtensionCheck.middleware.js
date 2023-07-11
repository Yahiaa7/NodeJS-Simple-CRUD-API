const { upload, multer } = require('../configs/multer.config');

exports.uploadImage = (req, res, next) => {
    const uploadMiddleware = upload.single('picture');

    uploadMiddleware(req, res, err => {
        if (err instanceof multer.MulterError)
            return res.status(400).json({ message: 'File upload error.', error: err.message });
        else if (err) return res.status(500).json({ message: `${err}` });

        return next();
    });
};