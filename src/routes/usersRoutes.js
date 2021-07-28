const express = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination(req, file, callback){
        const destinationPath = path.join(__dirname, '../../public/images/pp/')
        callback(null, destinationPath);
    },
    filename(req, file, callback){
        const extension = path.extname(file.originalname)
        const filename = Date.now() + extension;
        callback(null, filename);
    }
})
const upload = multer({storage})

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const validationRegister = require('../middlewares/validationRegisterUser')
const validationLogin = require('../middlewares/validationLoginUser')

usersRouter.get("/login", guestMiddleware, usersController.login);
usersRouter.post("/login", guestMiddleware, validationLogin, usersController.processLogin);

usersRouter.get("/register", guestMiddleware, usersController.register);
usersRouter.post("/", guestMiddleware, upload.single('photo'), validationRegister, usersController.createNewUser);

usersRouter.get("/logout", authMiddleware, usersController.logout);

usersRouter.get("/profile", authMiddleware, usersController.profile);



module.exports = usersRouter