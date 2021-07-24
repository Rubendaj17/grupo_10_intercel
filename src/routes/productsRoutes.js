const express = require('express');
const productsRouter = express.Router()
const path = require('path');
const multer = require('multer');

const guestMiddleware = require('../middlewares/guestMiddleware')
const productsController = require('../controllers/productsController');
const validationNewProduct = require('../middlewares/validationNewProduct');
const imageMiddleware = require('../middlewares/imageMiddleware');
const searchBarValidation = require('../middlewares/searchBarValidation');


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const destinationPath= path.join(__dirname, '../../public/images')
    
        cb(null, destinationPath)
    },
    filename:  (req, file, cb)=>{
        const extension = path.extname(file.originalname)   //El nombre del archivo original es: file.originalname
        const name = Date.now();
        const filename = name+extension; //generar un nombre para el archivo

        cb(null, filename);
    }
})

const upload = multer({storage})
// listar productos
productsRouter.get("/adminList", guestMiddleware, productsController.adminList);

productsRouter.get("/list", productsController.list)
productsRouter.get("/list/:brand", productsController.brandList)

// formulario crear y envio de creacion
productsRouter.get("/create", productsController.newProductForm);
productsRouter.post("/create", validationNewProduct, upload.fields([{name:'logo'},{name:'modelMainImage'},{name:'imageOne'},{name:'imageTwo'},{name:'imageThree'}]), imageMiddleware, productsController.createNewProduct);

productsRouter.delete("/:id", productsController.destroy);

// detalle producto
productsRouter.get("/:id", productsController.detail)
productsRouter.get("/search/:id", searchBarValidation, productsController.search)

// formulario editar y envio de edicion
productsRouter.get("/:id/editProduct" , productsController.editProductForm);
productsRouter.put("/:id/" ,upload.fields([{name:'mainImage', maxCount:1},{name:'images'}]), productsController.updateProduct);


module.exports = productsRouter