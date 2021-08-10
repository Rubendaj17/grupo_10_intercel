window.addEventListener('load', function(){

    const addToCartButton = document.querySelectorAll('.button')
     
    addToCartButton.forEach(btn => {
        btn.addEventListener('click', addToCarritoItem)
        
    })
   
})

let carrito = []

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.stockContainer')
    const itemBrand = document.querySelector('.brand').textContent
    const itemModel = document.querySelector('.phoneName').textContent
    const itemImage = document.querySelector('.mainImage').src
    const itemColor = item.querySelector('.color').textContent
    const itemRam = item.querySelector('.ram').textContent
    const itemPrice = item.querySelector('.price').textContent

    const newItem = {
        brand: itemBrand,
        model: itemModel,
        image: itemImage,
        color: itemColor,
        ram: itemRam,
        price: itemPrice,
        cantidad: 1
    }
    
    addItemtoCarrito (newItem)
    
}

function addItemtoCarrito (newItem){
    carrito.push(newItem)
    console.log(carrito)
}
    
function renderCarrito(){

}
    

