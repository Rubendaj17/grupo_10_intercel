const API_SEARCH_URL = 'http://localhost:3000/api/search?userSearch='
const API_BRANDS_URL = 'http://localhost:3000/api/brands?brand='

window.addEventListener('load',function () {
    // console.log('Hola desde searchBar.JS');

    const searchBar = document.querySelector('.searchBar input')
    const searchOptions = document.querySelector('.searchBar .options')
    const productsHeader = document.querySelector('#productosHeader')
    const brandOptions = document.querySelector('#productosHeader .options')

    function doSearch () {
        const value = searchBar.value

        fetch(`${API_SEARCH_URL}${value}`)
            .then( res => res.json())
            .then( res => {

                if(res.meta.total === 0){
                    searchOptions.innerHTML += "<a href='/products/list'><li>No se encontraron Marcas/Modelos</li></a>"                   
                }else{
                    res.data.forEach( e => {
                        e.model ? 
                            searchOptions.innerHTML += `<a href='/products/${e.id}'><li>${e.model}</li></a>` : 
                            searchOptions.innerHTML += `<a href='/products/list/${e.name}'><li>${e.name}</li></a>` 
                    });
                }

            })

    }

    searchBar.addEventListener('focus', () => {
        searchOptions.style.display = "block"
    })
    searchBar.addEventListener('blur', () => {
        setTimeout(function(){searchOptions.style.display = "none" }, 150)
        
    })
    
    
    searchBar.addEventListener('keyup', (e) => {
        searchOptions.innerHTML = ''
        
        searchBar.value === '' ?
            searchOptions.innerHTML = "<a href='/products/list'><li>Productos</li></a>" :
            doSearch()
        
    })
    
    let brands
    productsHeader.addEventListener('mouseover',()=>{
        brandOptions.style.display = "block"
        
        this.fetch(`${API_BRANDS_URL}`)
        .then(res => res.json())
        .then( res => {

            if (!brands){
                
                if(res.meta.total === 0){
                    brandOptions.style.display = "none"
                    brands = false
                }else{
                    res.data.forEach( e => {
                        brandOptions.innerHTML += `<a class='brandOptions' href='/products/list/${e.name}'>${e.name}</a>` 
                    });
                    brands = true
                }
            }
                
        })




    })
    productsHeader.addEventListener('mouseout',()=>{
        brandOptions.style.display = "none"
    })






})