const API_SEARCH_URL = 'http://localhost:3000/api/users?email='

window.addEventListener('load', function(){
    
    const form = document.querySelector('form')
    const formError = document.querySelector('#formError')
    
    const name = document.querySelector('#name')
    const nameError = document.querySelector('#nameError')
    
    const lastName = document.querySelector('#lastName')
    const lastNameError = document.querySelector('#lastNameError')
    
    const phone = document.querySelector('#phoneNumber')
    const phoneError = document.querySelector('#phoneNumberError')

    const email = document.querySelector('#email')
    const emailError = document.querySelector('#emailError')

    const pass = document.querySelector('#password')
    const passError = document.querySelector('#passwordError')
    
    let errores = false
    
    function nameCheck(input, errorMsg) {
        errores = false
        formError.innerText = ''     
        
        if(input.value === ''){
            errorMsg.innerText = "Ingrese un Nombre"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true
            
        }else if( input.value.length <3 ){
            errorMsg.innerText = "Nombre debe tener mínimo 3 letras"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true
            
        }else{
            errorMsg.innerText = ""
            input.classList.remove('incorrect')
            input.classList.add('correct')
            errores = false            
        }
        
    }
    
    
    function phoneCheck(input, errorMsg) {
        errores = false
        
        if(input.value === ''){
            errorMsg.innerText = "Ingrese un Teléfono"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true
            
        }else if( input.value.length <6 ){
            errorMsg.innerText = "Nombre debe tener mínimo 6 numeros"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true
            
        }else{
            errorMsg.innerText = ""
            input.classList.remove('incorrect')
            input.classList.add('correct')
            errores = false            
        }
        
    }
    
    
    function emailCheck(input, errorMsg) {
        errores = false
        formError.innerText = ''     
        
        if(input.value === ''){
            errorMsg.innerText = "Ingrese un mail"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true            
            
        }else if( input.value.indexOf('@')<0 || input.value.indexOf('.com')<0 ){
            errorMsg.innerText = "Ingrese un mail válido"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true            
            
        }else{
            
            fetch(`${API_SEARCH_URL}${input.value}`)
            .then( res => res.json())
            .then( res => {
                
                if(res.meta.total === 0){
                    errorMsg.innerText = ""
                    input.classList.remove('incorrect')
                    input.classList.add('correct')
                    
                }else{
                    errorMsg.innerText = "Usuario ya registrado"                   
                    input.classList.remove('correct')
                    input.classList.add('incorrect')
                    errores = true            
                }
            })            
        }
    }    
    
    function passStrength(){
        let strongPass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPass = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))')

        if(strongPass.test(pass.value)){
            passError.style.color = 'green'
            passError.innerText = 'Contraseña Fuerte (min. 8 caracteres con minúsculas, mayúsculas, números y caracteres especiales)'
        }else if (mediumPass.test(pass.value)){
            passError.style.color = 'blue'
            passError.innerText = 'Contraseña Media (min. 6 caracteres con minúsculas, mayúsculas, números y caracteres especiales)'
        }else{
            passError.style.color = 'orange'
            passError.innerText = 'Contraseña Débil'
        }
    }
    
    function passCheck(input, errorMsg) {
        errores = false
        formError.innerText = ''     
        
        if(pass.value === ''){
            errorMsg.color = 'red'
            errorMsg.innerText = "Ingrese Contraseña"
            input.classList.remove('correct')
            input.classList.add('incorrect')
            errores = true
        }else{   
            passStrength()
            input.classList.remove('incorrect')
            
        }
    }
    
    
    name.addEventListener('blur', () => nameCheck(name, nameError))
    lastName.addEventListener('blur', () => nameCheck(lastName, lastNameError))
    phone.addEventListener('blur', () => phoneCheck(phone, phoneError))
    email.addEventListener('blur', () =>  emailCheck(email, emailError))
    pass.addEventListener('blur', () => passCheck(pass, passError))
    
    
    form.addEventListener('submit', (e) => {
        nameCheck(name, nameError)
        nameCheck(lastName, lastNameError)
        phoneCheck(phone, phoneError)
        emailCheck(email, emailError)
        passCheck(pass, passError)
        
        if(errores){
            formError.innerText = "Revisar información ingresada"
            e.preventDefault()
            
        } 
        
        
    })
})
