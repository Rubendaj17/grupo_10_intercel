window.onload = function() {

    const pageTitle = document.title
    const message = 'Grupo 10 - Ale, Justi & Ruben'
    let changing = null
  
    document.addEventListener('visibilitychange', function(e) {
      const isPageActive = !document.hidden
  
      if(!isPageActive){

        changing = setInterval(function() {
            if(document.title === message){
              document.title = pageTitle
            }else {
              document.title = message
            }
          }, 1000)

      }else {
        document.title = pageTitle
        clearInterval(changing)
      }
    })
  }