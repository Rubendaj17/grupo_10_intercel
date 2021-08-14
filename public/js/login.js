const API_SEARCH_URL = 'http://localhost:3000/api/register?email='

window.addEventListener('load', function(){
    
    const email = document.querySelector('#email')
    const emailError = document.querySelector('#emailError')
    const pass = document.querySelector('#password')
    const passError = document.querySelector('#passwordError')

    email.addEventListener('blur', ()=>{
        const value = email.value
        
        if(value === ''){
            emailError.innerText = "Ingrese un Usuario"
            email.classList.remove('correct')
            email.classList.add('incorrect')
        }else if( value.indexOf('@')<0 && value.indexOf('.com')<0 ){
            emailError.innerText = "Ingrese un mail válido"
            email.classList.remove('correct')
            email.classList.add('incorrect')
        }else{
            
            fetch(`${API_SEARCH_URL}${value}`)
                .then( res => res.json())
                .then( res => {
    
                    if(res.meta.total === 0){
                        emailError.innerText = "Usuario inexistente"                   
                        email.classList.remove('correct')
                        email.classList.add('incorrect')
                    }else{
                        emailError.innerText = ""
                        email.classList.remove('incorrect')
                        email.classList.add('correct')
                    }
                })            
        }

    })

    pass.addEventListener('blur', ()=>{
        const value = pass.value
        
        if(value === ''){
            passError.innerText = "Ingrese Contraseña"
            pass.classList.remove('correct')
            pass.classList.add('incorrect')
        }else{   
            // fetch(`${API_SEARCH_URL}${value}`)
            //     .then( res => res.json())
            //     .then( res => {
    
            //         if(res.meta.total === 0){
            //             emailError.innerText = "Usuario inexistente"                   
            //             email.classList.remove('correct')
            //             email.classList.add('incorrect')
            //         }else{
            //             emailError.innerText = ""
            //             email.classList.remove('incorrect')
            //             email.classList.add('correct')
            //         }
            //     })            
        }

    })   




})