window.addEventListener('load', function(){

    const form = document.querySelector('.editForm')
    
    const inputPrice = document.querySelector('#price.inputControl')
    const errorPrice = document.querySelector('#priceError')

    const inputImageOne = document.querySelector('#imageOne.inputControl')
    const errorImageOne = document.querySelector('#imageOneError')

    const inputImageTwo = document.querySelector('#imageTwo.inputControl')
    const errorImageTwo = document.querySelector('#imageTwoError')

    const inputImageThree = document.querySelector('#imageThree.inputControl')
    const errorImageThree = document.querySelector('#imageThreeError')
    
    
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function resetErrors(){
        errorPrice.innerHTML = ""
        errorImageOne.innerHTML = ""

    }

    function validateExt(file){
        const allowedExt = ['.jpg', '.jpeg', '.png', '.svg']
        const format = "." + file.split('.').pop()
        if (allowedExt.includes(format)){
            return true
        }
        return false
        
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

        // images

        if (inputImageOne.value){
            validateExt(inputImageOne.value)
            
            if(validateExt(inputImageOne.value) == false){
                errorImageOne.innerHTML = "Por favor ingrese únicamente imagenes"
                hasErrors = true
                inputImageOne.focus()
            }                                
        }

        if (inputImageTwo.value){
            validateExt(inputImageTwo.value)
            
            if(validateExt(inputImageTwo.value) == false){
                errorImageTwo.innerHTML = "Por favor ingrese únicamente imagenes"
                hasErrors = true
                inputImageTwo.focus()
            }                                
        }

        if (inputImageThree.value){
            validateExt(inputImageThree.value)
            
            if(validateExt(inputImageThree.value) == false){
                errorImageThree.innerHTML = "Por favor ingrese únicamente imagenes"
                hasErrors = true
                inputImageThree.focus()
            }                                
        }
        
        
        if(hasErrors){
            e.preventDefault()
        }


    })




})