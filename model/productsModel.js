const fs = require('fs')
const path = require('path')

module.exports = {
    fileName: path.resolve(__dirname,'../data/products.json'),
    
    readFile(){
        const productsJSON = fs.readFileSync(this.fileName,'utf-8')
        return JSON.parse(productsJSON)
    },
    
    writeFile(newData){
        const dataJSON = JSON.stringify(newData, null, 2)
        fs.writeFileSync(this.fileName, dataJSON)
    },

    generateID(){
        const products = this.readFile()
        const lastProduct = products.pop()
        return lastProduct.id + 1
    },
    
    randomize: (array, n)=>{
        let finalList = []

       while(finalList.length<n){
            let random = Math.round(Math.random()* (array.length - 1))
            finalList.includes(array[random])? '' : finalList.push(array[random])
        }
        return finalList
    },

    findAll() {
        return this.readFile()
    },

    findByBrand(brand){
        const products = this.readFile()

        return products.filter( e => e.brand == brand)

    },

    findByPk(id){
        const products = this.readFile()
        return products.find (e => e.id == id)
    },
    
    getBrands() {
        const products = this.readFile()
        let brands = []

        products.forEach(e => {
            if (!brands.includes(e.brand)){
                brands.push(e.brand)
            }
        });
        return brands
    },

    offers(){
        const products = this.readFile();
        let offerAux = products.filter(e => e.offer == 'si')

        
        return offerAux;
    },
    
    storeNew(cellphone){
        cellphone.id = this.generateID()

        const products = this.readFile()

        const productsUpdated = [...products, cellphone]

        this.writeFile(productsUpdated)

        return products
    
    },

}