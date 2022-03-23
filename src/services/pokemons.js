const URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = (offset, limit) => {
  return fetch(`${URL}?offset=${offset}&limit=${limit}`).then((response) =>
    response.json()
  );
};

export const getPokemon = (pokemonName) => {
  return fetch(`${URL}/${pokemonName}`).then((response) => response.json());
};
