const API_SEARCH_URL = 'http://localhost:3000/api/search?userSearch='

window.addEventListener('load',function () {
    
    console.log('Hola desde searchBar.JS');

    const searchContainer = document.querySelector('.searchBar')
    const searchBar = document.querySelector('.searchBar input')
    const searchOptions = document.querySelector('.searchOptions')

    searchBar.addEventListener('focus', () => {
        searchOptions.style.display = "block"
    })
    searchBar.addEventListener('blur', () => {
        setTimeout(function(){searchOptions.style.display = "none" }, 150)
        
    })
    
    
    searchBar.addEventListener('keyup', (e) => {
        searchOptions.innerHTML = ''

        doSearch()
    })





    function doSearch () {
        const value = searchBar.value

        fetch(`${API_SEARCH_URL}${value}`)
            .then( res => res.json())
            .then( res => {

                if(res.meta.total === 0){
                    searchOptions.innerHTML += "<li><a href='/products/list'>No se encontraron Marcas ni Modelos.</a></li>"                   
                }else{
                    res.data.forEach( e => {
                        e.model ? 
                            searchOptions.innerHTML += `<li><a href='/products/${e.id}'>${e.model}</a></li>` : 
                            searchOptions.innerHTML += `<li><a href='/products/${e.name}'>${e.name}</a></li>` 
                    });
                }

            })

    }



})