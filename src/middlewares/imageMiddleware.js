const fs = require('fs')
const path = require('path');

module.exports = async (req, res, next)=>{
    const logo = req.files

    const logoPath = path.join(__dirname, '../../public/images/logos')
    if(req.files.logo){
        const logoPathFinal = await fs.renameSync(req.files.logo[0].path, path.join(logoPath, req.files.logo[0].filename))
    }
    
    const modelPath = path.join(__dirname, '../../public/images/cellphones/models')
    if(req.files.modelMainImage){
        const modelPathFinal = await fs.renameSync(req.files.modelMainImage[0].path, path.join(modelPath, req.files.modelMainImage[0].filename))
    }
    
    const imagePath = path.join(__dirname, '../../public/images/cellphones')
    if(req.files.imageOne){
        const imageOnePathFinal = await fs.renameSync(req.files.imageOne[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageOne[0].filename))
    }
    if(req.files.imageTwo){
        const imageTwoPathFinal = await fs.renameSync(req.files.imageTwo[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageTwo[0].filename))
    }
    if(req.files.imageThree){
        const imageThreePathFinal = await fs.renameSync(req.files.imageThree[0].path, path.join(imagePath, req.body.brand, req.body.model, req.files.imageThree[0].filename))
    }


    next()    
}