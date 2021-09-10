const API_SEARCH_URL = 'http://localhost:3000/api/user?email='

window.addEventListener('load', function(){
    
    const email = document.querySelector('#email')
    const emailError = document.querySelector('#emailError')
    const pass = document.querySelector('#password')
    const passError = document.querySelector('#passwordError')
    const form = document.querySelector('form')
    const formError = document.querySelector('#formError')
    
    let errores = true
        
    function userValidation() {
        errores = true
        formError.innerText = ''     
        
        if(email.value === ''){
            emailError.innerText = "Ingrese un Usuario"
            email.classList.remove('correct')
            email.classList.add('incorrect')
            
        }else if( email.value.indexOf('@')<0 || email.value.indexOf('.com')<0 ){
            emailError.innerText = "Ingrese un mail válido"
            email.classList.remove('correct')
            email.classList.add('incorrect')
            
        }else{
            
            fetch(`${API_SEARCH_URL}${email.value}`)
            .then( res => res.json())
            .then( res => {
                
                if(res.meta.total === 0){
                    emailError.innerText = "Usuario no existente"                   
                    email.classList.remove('correct')
                    email.classList.add('incorrect')
                    
                }else{
                    emailError.innerText = ""
                    email.classList.remove('incorrect')
                    email.classList.add('correct')
                    errores = false            
                }
            })            
        }
    }    
    
    function passValidation() {
        errores = true
        formError.innerText = ''     
        
        if(pass.value === ''){
            passError.innerText = "Ingrese Contraseña"
            pass.classList.remove('correct')
            pass.classList.add('incorrect')
            
        }else{   
            passError.innerText = ""
            pass.classList.remove('incorrect')
            errores = false
        }
    }
    
    email.addEventListener('blur', userValidation)
    
    pass.addEventListener('blur', passValidation)   
    
    form.addEventListener('submit', (e) => {
        
        userValidation()
        
        passValidation()
        
        if(errores){
            formError.innerText = "Revisar información ingresada"
            e.preventDefault()
    
        } 
        
        
    })
    
})
