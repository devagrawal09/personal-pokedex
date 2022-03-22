import React, { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemons";

const PokemonPopup = ({ selectedPokemon, close }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon(selectedPokemon?.name).then((data) => {
      setPokemon(data);
    });
  }, [selectedPokemon?.name]);

  const { id, name, height, weight, base_experience } = pokemon;

  if (!selectedPokemon) {
    return null;
  }

  const onClose = (e) => {
    if (e.target.className === "pokeCard__backdrop") {
      close();
    }
  };

  return (
    <div className="pokeCard__backdrop" onClick={onClose}>
      <div
        className={`pokeCard pokeCard--${
          pokemon.types && pokemon.types[0].type["name"]
        }`}
      >
        <div className="pokeCard__header">
          <h2 className="pokeCard__name">{name}</h2>
          <div className="pokeCard__stats">
            {pokemon.stats &&
              pokemon.stats.map((stat, index) => {
                return (
                  <p key={index}>
                    {stat["stat"]["name"]}:
                    <span className="pokeCard__item">
                      <strong>{stat.base_stat}</strong>
                    </span>
                  </p>
                );
              })}
          </div>
        </div>
        <div className="pokeCard__imgContainer">
          <img
            className="pokeCard__img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt="pokemon-pic"
          />
        </div>
        <div className="pokeCard__basics">
          <span>NO. {id}</span>
          <span>Height: {height}</span>
          <span>Weight: {weight}</span>
          <span>Base XP:{base_experience}</span>
        </div>

        <ul className="pokeCard__abilities">
          {pokemon.abilities &&
            pokemon.abilities.map((ability, index) => {
              return (
                <li className="pokeCard__ability" key={index}>
                  {ability["ability"]["name"]}
                </li>
              );
            })}
        </ul>
        <ul className="pokeCard__types">
          {pokemon.types &&
            pokemon.types.map((type, index) => {
              return (
                <li className="pokeCard__type" key={index}>
                  {type["type"]["name"]}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default PokemonPopup;
