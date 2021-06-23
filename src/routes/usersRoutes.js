const express = require('express');
const usersController = require('../controllers/usersController');
const usersRouter = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination(req, file, callback){
        const destinationPath = path.join(__dirname, '../public/images/pp/')
        callback(null, destinationPath);
    },
    filename(req, file, callback){
        //file.originalname     automaticamente viene el nombre del archivo q sube el usuario
        const extension = path.extname(file.originalname)
        const filename = Date.now() + extension;
        callback(null, filename);
    }
})
const upload = multer({storage})

usersRouter.get("/login", usersController.login);

usersRouter.get("/register", usersController.register);

usersRouter.post("/", upload.single('photo'), usersController.createNewUser);


module.exports = usersRouter