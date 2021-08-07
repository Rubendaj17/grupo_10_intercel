window.addEventListener('load', function(){
    
    const brandError = document.querySelector('#brandErrorMsg')
    const brand = document.querySelector('#brand')

    brand.addEventListener('blur', function(){
        if(brand.value == ''){
            brandError.innerText = "Completa la marca"
            brandError.classList.add('visible')
            brandError.classList.remove('invisible')
        } else {
            brandError.classList.add('invisible')
            brandError.classList.remove('visible')
        }
    })
})