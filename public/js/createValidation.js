window.addEventListener('load', function(){
  
    const form = document.querySelector('#newProductForm')

    const brandInput = form.querySelector('#brand')
    const logoInput = form.querySelector('#logo')
    const modelInput = form.querySelector('#model')
    const imgInput = form.querySelector('#modelMainImage')
    const colorInput = document.querySelector('#color')
    const ramInput = form.querySelector('#ram')
    const priceInput = form.querySelector('#price')
    const imgOneInput = form.querySelector('#imageOne')
    const imgTwoInput = form.querySelector('#imageTwo')
    const imgThreeInput = form.querySelector('#imageThree')

    const brandError = form.querySelector('#brandErrorMsg')
    const logoError = form.querySelector('#logoErrorMsg')
    const modelError = form.querySelector('#modelErrorMsg')
    const imgError = form.querySelector('#modelMainImageErrorMsg')
    const colorError = document.querySelector('.colorErrorMsg')
    const ramError = form.querySelector('#ramErrorMsg')
    const priceError = form.querySelector('#priceErrorMsg')
    const imgOneError = form.querySelector('#imgOneErrorMsg')
    const imgTwoError = form.querySelector('#imgTwoErrorMsg')
    const imgThreeError = form.querySelector('#imgThreeErrorMsg')

    let msgErrorsArray = [
        brandError, logoError, modelError, imgError, colorError, 
        ramError, priceError, imgOneError, imgTwoError, imgThreeError
    ] 

    function resetErrors(){
        msgErrorsArray.forEach(msg => {
            msg.innerText = ""
        })
    }

    if(brandInput.value != '' ){    //si no es 'otro'. si ya existe la marca
        document.querySelector(".existsBrand").style.display = 'flex';
        document.querySelector(".existsMarginBrand").style.marginRight = '80px';
        document.querySelector(".existsInputLogo").style.display = 'none';
        document.querySelector("#logoErrorMsg").style.display = 'none';
    }

    if(modelInput.value != ''){
        document.querySelector(".existsModel").style.display = 'flex';
        document.querySelector(".existsMarginModel").style.marginRight = '80px';
        document.querySelector(".existsInputImg").style.display = 'none';
        document.querySelector("#modelMainImageErrorMsg").style.display = 'none';
    }

    form.addEventListener('submit', function(e){

        let hasErrors = false

        resetErrors() ;

        if(!brandInput.value){
            brandError.innerHTML = "Completa la marca"
            
            if(!hasErrors){
                brandInput.focus()
            }
            hasErrors = true;
        }

        if(!logoInput.value){
            logoError.innerHTML = "Completa el logo"
            
            if(!hasErrors){
                logoInput.focus()
            }
            hasErrors = true;
        }

        if(!modelInput.value){
            
            modelError.innerHTML = "Completa el modelo"
            
            if(!hasErrors){
                modelInput.focus()
            }
            hasErrors = true;            
        }

        if(!imgInput.value){
            imgError.innerHTML = "Completa la imagen"

            if(!hasErrors){
                imgInput.focus()
            }
            hasErrors = true;
        }

        if(!colorInput.value){
            colorError.innerHTML = "Seleccione un color"
            
            hasErrors = true;
        }
        
        if(!ramInput.value){
            ramError.innerHTML = "Seleccione un tamano"
            
            hasErrors = true;
        }

        if(!priceInput.value){
            priceError.innerHTML = "Ingrese el precio"
            
            hasErrors = true;
        }
        
        if(!imgOneInput.value){
            imgOneError.innerHTML = "Debes subir la imagen 1"
            
            if(!hasErrors){
                imgOneInput.focus()
            }
            hasErrors = true;
        }
        
        if(!imgTwoInput.value){
            imgTwoError.innerHTML = "Debes subir la imagen 2"
            
            if(!hasErrors){
                imgTwoInput.focus()
            }
            hasErrors = true;
        }
        
        if(!imgThreeInput.value){
            imgThreeError.innerHTML = "Debes subir la imagen 3"
            
            if(!hasErrors){
                imgThreeInput.focus()
            }
            hasErrors = true;
        }

        if(hasErrors){
            e.preventDefault();
        }
    })
  

})