const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = documet.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToli(pokemon){
    return`<li class = "pokemon ${pokemon.type}">
   <span class= "number">#${pokemon.number}</span> 
   <span class= "name">#${pokemon.name}</span>


   <div class="detail">
     <ol class="type">
     ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
     </ol>

     <img src="${pokemon.photo}" alt="${pokemon.name}">
     </div>
     </li>  
    
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=>{
        const newtml = pokemons.map(convertPokemonToli).join('')
        pokemonList.innerHTML += newtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventlistener('click', ()=>{
    offset+= limit
    const qtRecordsWithNexPage = offset + limit

    if (qtRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
             loadPokemonItens(offset, limit)
    }   
})