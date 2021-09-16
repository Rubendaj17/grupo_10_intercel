const express = require('express');
const productsRouter = express.Router()
const path = require('path');
const multer = require('multer');


// impedir ingreso a personas logueadas
// const guestMiddleware = require('../middlewares/guestMiddleware')

// impedir ingreso a personas sin loguearse como admin
const authMiddleware = require('../middlewares/authMiddleware')

const productsController = require('../controllers/productsController');
const validationNewProduct = require('../middlewares/validationNewProduct');
const validationEditProduct = require('../middlewares/validationEditProduct');
const foldersMiddleware = require('../middlewares/foldersMiddleware');
const deleteMiddleware = require('../middlewares/deleteMiddleware');
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
productsRouter.get("/adminList", authMiddleware, productsController.adminList);

productsRouter.get("/list", productsController.list)
productsRouter.get("/list/:brand", productsController.brandList)

// formulario crear y envio de creacion
productsRouter.get("/create", authMiddleware, productsController.newProductForm);
productsRouter.post("/create", upload.fields([{name:'logo'},{name:'modelMainImage'},{name:'imageOne'},{name:'imageTwo'},{name:'imageThree'}]), validationNewProduct, foldersMiddleware, imageMiddleware, productsController.createNewProduct);
productsRouter.delete("/:id", authMiddleware, productsController.destroy);

// detalle producto
productsRouter.get("/:id", productsController.detail)
productsRouter.get("/search/:id", searchBarValidation, productsController.search)

// formulario editar y envio de edicion
productsRouter.get("/:id/editProduct", authMiddleware, productsController.editProductForm);
productsRouter.put("/:id/" ,upload.fields([{name:'imageOne'},{name:'imageTwo'}, {name:'imageThree'}]),validationEditProduct, deleteMiddleware, imageMiddleware, productsController.updateProduct);


module.exports = productsRouter