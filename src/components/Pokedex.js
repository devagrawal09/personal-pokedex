import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import Footer from "./Footer";
import { getPokemons, getMorePokemons } from "../services/pokemons";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const next = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => prevCount + 20);
    });
  };

  const back = () => {
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
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </div>
      <Footer back={back} next={next} />
    </>
  );
};

export default Pokedex;
