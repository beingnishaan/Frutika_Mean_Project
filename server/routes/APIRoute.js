const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')
const ApiController = require('../controllers/UserController');



router.use('/upload', express.static(path.join(__dirname, 'upload')))
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
//stape4 file type
const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes("png") ||
        file.mimetype.includes("jpg") ||
        file.mimetype.includes("jpeg")) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}
//stape5 file upload
router.use(multer({ storage: fileStorage, fileFilter: fileFilter, limits: { fieldSize: 1024 * 1024 * 5 } }).single('image'))




router.post('/signup', ApiController.register)
router.post('/login', ApiController.login)

module.exports = router;
