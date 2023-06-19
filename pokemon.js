let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
]

let pokemonTypes = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego'
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Weedle',
        tipo: 'Bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const pokemonMayusculas = pokemon.map((elemento) => elemento.toUpperCase());
const pokemonFuego = pokemonTypes.filter((p) => p.tipo === "Fuego");

console.log('Pokemones en mayúsculas:', pokemonMayusculas);
console.log('Tipo fuego:', pokemonFuego);
