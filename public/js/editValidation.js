window.addEventListener('load', function(){

    const form = document.querySelector('.createForm')
    
    const inputPrice = document.querySelector('#precio.inputControl')
    const errorPrice = document.querySelector('#priceError')


    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function resetErrors(){
        errorPrice.innerHTML = ""

    }

    form.addEventListener('submit', (e)=> {
        let hasErrors = false
        resetErrors()

        // precio

        if (!isNumeric(inputPrice.value) || inputPrice.value < 100){
            errorPrice.innerHTML = "Por favor ingrese un precio válido (número mayor a 100) "
            hasErrors = true
            inputPrice.focus()
        }       
        
        if(hasErrors){
            e.preventDefault()
        }


    })


})