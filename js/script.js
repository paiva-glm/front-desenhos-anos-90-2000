const getpokemons = async function() {
    

    // cria um loop para acessar os dados da api e criar card
    for(let i = 1 ; i< 21; i++){

        //url da api
        const url = "https://pokeapi.co/api/v2/pokemon/"+i

        //pega e recebe os dados da api
        let response = await fetch(url)
        let dados = await response.json()

        let especie = await fetch(dados.species.url)
        let despecie =  await especie.json()

        //pega/cria os elementos html
        let div_conteudo = document.getElementById("conteudo")
        let div_card = document.createElement("div")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let img = document.createElement("img")
        let p = document.createElement("p")
        let div_bottons = document.createElement("div")
        let input = document.createElement("input")
        let img_fav = document.createElement("img")

        //seta os atributos
        div_card.setAttribute("id", "card")
        img.setAttribute("src", dados.sprites.front_default)
        div_bottons.setAttribute("id", "botton-card")
        input.setAttribute("type", "button")
        input.setAttribute("value", "ACESSAR")
        img_fav.setAttribute("src", "../assets/favoco.jpg")

        //cria a hierarquia dos elementos
        div_conteudo.appendChild(div_card)
        div_card.appendChild(h3)
        div_card.appendChild(span)
        span.appendChild(img)
        div_card.appendChild(p)
        div_card.appendChild(div_bottons)
        div_bottons.appendChild(input)
        div_bottons.appendChild(img_fav)

        console.log(dados)
        //coloca o texto dentro de onde tem texto
        h3.innerText = dados.name
        p.innerText = `cor:${despecie.color.name}\n andar:${despecie.shape.name}\n habitat:${despecie.habitat.name}\n geração:${despecie.generation.name} `
       


    }

}




window.addEventListener("load",function(){
    getpokemons()
})