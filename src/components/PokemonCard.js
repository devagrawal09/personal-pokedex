import React, { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemon";

const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon(`/${props.name}`).then((data) => {
      setPokemon(data);
    });
  }, [props.name]);

  return (
    <div className="card">
      <h3 className="card__title">{pokemon.name}</h3>
      {}
      <img
        className="card__img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon-pic"
      />
    </div>
  );
};

export default PokemonCard;
