

const pokemonArray = [];

// credit to https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2 for information on how to use pokemon api

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=649')
    .then(response => response.json())
    .then(function(allpokemon) {
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch (url)
    .then (response => response.json())
    .then(function(pokeData) {
        pushPokemon(pokeData)
    })
}

function pushPokemon(pokeData) {
    pokemonArray.push(pokeData);
}


// credit to https://www.programiz.com/javascript/examples/get-random-item for base of this function
function randomPokemonSelector(arr) {
    
    const randomIndex = Math.floor(Math.random() * arr.length);

    const pokemon = arr[randomIndex];

    return pokemon;

    
}

fetchPokemon();
console.log(pokemonArray);

const randomPokemon = randomPokemonSelector(pokemonArray);
console.log(randomPokemon);



