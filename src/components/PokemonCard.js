import React, { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemons";

const PokemonCard = ({ name }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getPokemon(`/${name}`).then((data) => {
      setPokemon(data);
      setIsLoading(false);
    });
  }, [name]);

  return (
    <div className="card">
      {isLoading ? (
        <div className="card__loading" />
      ) : (
        <>
          <h3 className="card__title">{name}</h3>
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
