
const pokemonButton = document.querySelector('new-pokemon');

const callPokemon = getRandomPokemon();

pokemonButton.addEventListener('click', getRandomPokemon());

Window.onload = getRandomPokemon();

//console.log(getRandomPokemonNumber());

// function gets a random pokemon and calls the renderPokemon function to render it
function getRandomPokemon() {
    var number = getRandomPokemonNumber();
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.json())
    .then(function(data){
        var name = data.species.name; 

        // this is the old call for black and white sprites
        //var sprite = data.versions.generation_v.black_white.animated.front_default;

        var sprite = data.sprites.front_default;
        renderPokemon(name, sprite);
    });
    
}

// function returns a random number between 1 and 649
function getRandomPokemonNumber() {
    return Math.floor(Math.random() * (905 - 1) + 1);
}

function renderPokemon(name, sprite){
    document.getElementById('js-pokemon-name').textContent = name; 
    document.getElementById('js-pokemon-image').src = sprite;
}


//getRandomPokemon(getRandomPokemonNumber());


































// old pokemon code 
/*
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
*/



