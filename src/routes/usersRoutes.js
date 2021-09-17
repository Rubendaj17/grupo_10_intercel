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

// permite acceder a usuarios sin loguearse
const guestMiddleware = require('../middlewares/guestMiddleware')
// permite acceder a usuarios logueados
const authMiddleware = require('../middlewares/authMiddleware')

const validationRegister = require('../middlewares/validationRegisterUser')
const validationLogin = require('../middlewares/validationLoginUser')

usersRouter.get("/login", guestMiddleware, usersController.login);
usersRouter.post("/login", validationLogin, usersController.processLogin);

usersRouter.get("/register", guestMiddleware, usersController.register);
usersRouter.post("/", guestMiddleware, upload.single('photo'), validationRegister, usersController.createNewUser);

usersRouter.get("/logout", usersController.logout);

usersRouter.get("/:id", authMiddleware, usersController.profile);

usersRouter.get("/:id/edit", authMiddleware, usersController.edit);
usersRouter.post("/:id", authMiddleware, usersController.processEdit);



module.exports = usersRouter