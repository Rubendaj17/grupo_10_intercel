const express = require('express');
const productsRouter = express.Router()
const path = require('path');
const multer = require('multer');

const productsController = require('../controllers/productsController');
const searchBarValidation = require('../middlewares/searchBarValidation');


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const destinationPath= path.join(__dirname, '../public/images/cellphones',req.body.brand, req.body.model)
    
        cb(null, destinationPath)
    },
    filename:  (req, file, cb)=>{
        const extension = path.extname(file.originalname)   //El nombre del archivo original es: file.originalname
        const model = req.body.model+ " - "+ Date.now();
        const filename = model+extension; //generar un nombre para el archivo

        cb(null, filename);
    }
})

const upload = multer({storage})
// listar productos
productsRouter.get("/adminList", productsController.adminList);

productsRouter.get("/list", productsController.list)
productsRouter.get("/list/:brand", productsController.brandList)

// formulario crear y envio de creacion
productsRouter.get("/create", productsController.newProductForm);
productsRouter.post("/create",upload.fields([{name:'mainImage'},{name:'images'}]), productsController.createNewProduct);
productsRouter.delete("/:id", productsController.destroy);

// detalle producto
productsRouter.get("/:id", productsController.detail)
productsRouter.get("/search/:id", searchBarValidation, productsController.search)

// formulario editar y envio de edicion
productsRouter.get("/:id/editProduct" , productsController.editProductForm);
productsRouter.put("/:id/" ,upload.fields([{name:'mainImage', maxCount:1},{name:'images'}]), productsController.updateProduct);

//vista de admin


module.exports = productsRouter