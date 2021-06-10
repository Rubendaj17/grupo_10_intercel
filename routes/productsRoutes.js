const express = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = express.Router()
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const destinationPath= path.join(__dirname, '../public/images')
        cb(null, destinationPath)
    },
    filename:  (req, file, cb)=>{
        const extension = path.extname(file.originalname)   //El nombre del archivo original es: file.originalname
        const now = Date.now();
        const filename = now+extension; //generar un nombre para el archivo

        cb(null, filename);
    }

})

const upload = multer({storage})

productsRouter.get("/list", productsController.list);
productsRouter.get("/list/:brand", productsController.brandList);
productsRouter.get("/create", productsController.newProduct);
productsRouter.post("/create", productsController.store);

productsRouter.delete("/:id", productsController.destroy);
productsRouter.get("/:id", productsController.detail);
productsRouter.get("/:id/editProduct" , productsController.editProduct);
//planetsRoutes.post('/create', upload.single('image'), planetsController.store);


module.exports = productsRouter