
const pokemonButton = document.querySelector('.new-pokemon');

const callPokemon = getRandomPokemon();

pokemonButton.addEventListener('click', getRandomPokemon);

Window.onload = getRandomPokemon();

// function gets a random pokemon and calls the renderPokemon function to render it
function getRandomPokemon() {
    var number = getRandomPokemonNumber();
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.json())
    .then(function(data){
        var pokemonName = data.species.name; 
        // this changes the first letter to upper case 
        var name = pokemonName[0].toUpperCase() + pokemonName.substring(1);
        var sprite = data.sprites.front_default;
        renderPokemon(name, sprite);
    });
    
}

// function returns a random number between 1 and 649
function getRandomPokemonNumber() {
    return Math.floor(Math.random() * (905 - 1) + 1);
}

// function replaces pokemon name and image elements with new random pokemon
function renderPokemon(name, sprite){
    document.getElementById('js-pokemon-name').textContent = name; 
    document.getElementById('js-pokemon-image').src = sprite;
}


