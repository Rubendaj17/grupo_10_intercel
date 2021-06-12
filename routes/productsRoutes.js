const express = require('express');
const productsController = require('../controllers/productsController');
const productsRouter = express.Router()
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const destinationPath= path.join(__dirname, '../public/images/cellphones',req.body.brand, req.body.model)
        console.log(destinationPath)
        cb(null, destinationPath)
    },
    filename:  (req, file, cb)=>{
        const extension = path.extname(file.originalname)   //El nombre del archivo original es: file.originalname
        const model = req.body.model;
        const filename = model+extension; //generar un nombre para el archivo

        cb(null, filename);
    }

})

const upload = multer({storage})
// listar productos
productsRouter.get("/list", productsController.list)
productsRouter.get("/list/:brand", productsController.brandList)

// formulario crear y envio de creacion
productsRouter.get("/create", productsController.newProductForm);
productsRouter.post("/create",upload.single('mainImage')  ,productsController.createNewProduct);
productsRouter.delete("/:id", productsController.destroy);

// formulario editar y envio de edicion
productsRouter.get("/:id", productsController.detail)

productsRouter.get("/:id/editProduct" , productsController.editProductForm);
productsRouter.put("/:id/" , productsController.updateProduct);
//planetsRoutes.post('/create', upload.single('image'), planetsController.store);



module.exports = productsRouter