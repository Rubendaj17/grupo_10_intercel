const form = document.querySelector('.createForm')

// inputs

const inputColor = form.querySelector('#color')
const inputMainImage = form.querySelector('.currentImage') 
const inputPrice = form.querySelector('.price')
const inputRam = form.querySelector('.ram')

// mensajes de error

const errorColor = form.querySelector('.msgErrorColor')
const errorMainImage = form.querySelector('.msgErrorImage') 
const errorPrice = form.querySelector('.msgErrorPrice')
const errorRam = form.querySelector('.msgErrorRam')

form.addEventListener('submit', (e) =>{
    let hasErrors = false


    if(hasErrors){
        e.preventDefault()
    }


})