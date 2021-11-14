import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import { getPokemons, getMorePokemons } from "../services/pokemons";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => prevCount + 20);
    });
  };

  const lessPokemon = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => prevCount - 20);
    });
  };

  return (
    <>
      <Header />
      <div className="cards">
        {pokemons.results?.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} id={count + index} />
        ))}
      </div>
      <div className="footer">
        <div className="btn" onClick={lessPokemon}>
          <h3 className="btn__text">Back</h3>
        </div>
        <div className="btn" onClick={morePokemon}>
          <h3 className="btn__text">Next</h3>
        </div>
      </div>
    </>
  );
};

export default Pokedex;
