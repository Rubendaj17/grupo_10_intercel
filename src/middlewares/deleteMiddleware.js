const fs = require('fs')
const {validationResult} = require('express-validator')


module.exports = async (req, res, next)=>{
    
    let errors = validationResult(req)
    
    //chequea si hay errores, para eliminar imagenes
    if (!errors.isEmpty()){
        let images = []
        
        req.files.imageOne ? images.push(req.files.imageOne[0].path) : ''
        req.files.imageTwo ? images.push(req.files.imageTwo[0].path) : ''
        req.files.imageThree ? images.push(req.files.imageThree[0].path) : ''
        
        images.forEach( async e => {    
            await fs.unlink(e, err => console.log(err))
        })

        next()
        return
    }
    

    next()

}