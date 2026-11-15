const getpokemons = async () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/"


for(let i = 1 ; i< 21; i++){

    let response = await fetch(url+i)
    let dados = await response
    
}

}




window.addEventListener("load",function(){
    getpokemons()
})