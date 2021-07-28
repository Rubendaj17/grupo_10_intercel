const fs = require('fs')
const path = require('path');
const {validationResult} = require('express-validator')
const db = require('../database/models')

module.exports = async (req, res, next)=>{
    
    let errors = validationResult(req)
    
    //chequea si hay errores, para eliminar imagenes
    if (!errors.isEmpty()){
        let images = []
        
        req.files.logo ? images.push(req.files.logo[0].path) : ''
        req.files.modelMainImage ? images.push(req.files.modelMainImage[0].path) : ''
        req.files.imageOne ? images.push(req.files.imageOne[0].path) : ''
        req.files.imageTwo ? images.push(req.files.imageTwo[0].path) : ''
        req.files.imageThree ? images.push(req.files.imageThree[0].path) : ''
        
        images.forEach( async e => {    
            await fs.unlink(e, err => console.log(err))
        })

        next()
        return
    }

    // busca Marca elegida por el usuario
    let isBrand = await db.Brand.findOne({
        where: { name:req.body.brand }
    })

    // si No existe crea la carpeta
    if(!isBrand){
        let newPath = path.resolve(__dirname, '../../public/images/cellphones',req.body.brand)
        let newFolder = await fs.mkdir(newPath, err => console.log(err))
    }

    // busca Model elegido por el usuario
    let isModel = await db.Model.findOne({
        where: { model:req.body.model }
    })

    // si No existe crea la carpeta
    if(!isModel){
        let newPath = path.resolve(__dirname, '../../public/images/cellphones',req.body.brand,req.body.model)
        let newFolder = await fs.mkdir(newPath, err => console.log(err))
    }

    next()

}