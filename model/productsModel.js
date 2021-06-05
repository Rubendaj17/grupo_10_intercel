const fs = require('fs')
const path = require('path')

module.exports = {
    fileName: path.resolve(__dirname,'../data/products.json'),
    
    readFile(){
        const productsJSON = fs.readFileSync(this.fileName,'utf-8')
        return JSON.parse(productsJSON)
    },

    findAll() {
        return this.readFile()
    },

    findByBrand(brand){
        const products = this.readFile()

        return products.filter( e => e.brand == brand)

    }









}