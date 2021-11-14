import React, { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemons";

const PokemonCard = (props) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPokemon(`/${props.name}`).then((data) => {
      setPokemon(data);
      setIsLoading(false);
    });
  }, [props.name]);

  return (
    <div className="card">
      {isLoading ? (
        <div className="card__loading" />
      ) : (
        <>
          <h3 className="card__title">{pokemon.name}</h3>
          <h4 className="card__subtitle">
            {pokemon.types?.map((type) => type.type.name).join(`, `)}
          </h4>
          <img
            className="card__img"
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt="pokemon-pic"
          />
        </>
      )}
    </div>
  );
};

export default PokemonCard;
