const fs = require('fs')
const path = require('path');

module.exports = async (req, res, next)=>{

    const logoPath = path.join(__dirname, '../../public/images/logos')
    if(req.files.logo){
        const logoPathFinal = await fs.rename(req.files.logo[0].path, path.join(logoPath, req.files.logo[0].filename), err => console.log('1', err))
    }
    
    const modelPath = path.join(__dirname, '../../public/images/cellphones/models')
    if(req.files.modelMainImage){
        const modelPathFinal = await fs.rename(req.files.modelMainImage[0].path, path.join(modelPath, req.files.modelMainImage[0].filename), err => console.log('2', err))
    }
    
    const imagePath = path.join(__dirname, '../../public/images/cellphones')
    if(req.files.imageOne){
        const imageOnePathFinal = await fs.rename(req.files.imageOne[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageOne[0].filename), err => console.log('3', err))
    }
    if(req.files.imageTwo){
        const imageTwoPathFinal = await fs.rename(req.files.imageTwo[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageTwo[0].filename), err => console.log('4', err))
    }
    if(req.files.imageThree){
        const imageThreePathFinal = await fs.rename(req.files.imageThree[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageThree[0].filename), err => console.log('5', err))
    }


    next()    
}