module.exports ={

    randomize: (array, n)=>{
        let finalList = []

       while(finalList.length<n){
            let random = Math.round(Math.random()* (array.length - 1))
            finalList.includes(array[random])? '' : finalList.push(array[random])
        }
        return finalList
    },

}