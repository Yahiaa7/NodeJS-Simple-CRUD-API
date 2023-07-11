const { upload, multer } = require('../configs/multer.config');

exports.uploadImage = (req, res, next) => {
    const uploadMiddleware = upload.single('picture');

    uploadMiddleware(req, res, err => {
        if (err instanceof multer.MulterError)
            return res.status(400).json({ message: 'File upload error.', error: err.message });
        if (err) return res.status(500).json({ message: 'Error uploading file.' });

        if (!req.file) return next();
        const fileExt = req.file.ext.toLowerCase();
        if (!['png', 'jpg', 'jpeg'].includes(fileExt))
            return res.status(400).json({ message: 'Invalid file extension, make sure you image is of one of these types (.png, .jpg, .jpeg)!' });

        return next();
    });
};