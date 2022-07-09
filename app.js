// https://pokeapi.co/api/v2/pokemon/ditto

let randomNum = Math.floor(Math.random() * 898) + 1

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: randomNum,
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

// `${apiData.url}${apiData.type}/${apiData.id}` a fenti eredetileg



// console.log(apiUrl)
// console.log(data.json())

fetch(apiUrl)
.then( (data) => data.json())
.then( (pokemon) => generateHtml(pokemon) )

const generateHtml = (data) => {
    // console.log(data)
    
    const html = `
        <div class="name">${data.name}</div>
        <img src="${data.sprites.front_shiny}">
        <div class="details">
            <span>Height: ${data.height} cm</span>
            <span>Weight: ${data.weight} pounds</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}

document.querySelector('.generate-btn').addEventListener('click', () => {
    location.reload()
})

