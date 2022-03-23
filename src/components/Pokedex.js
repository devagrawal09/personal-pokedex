import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import Footer from "./Footer";
import { getPokemons } from "../services/pokemons";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(0, 10).then((data) => {
      setPokemons(data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="cards">
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Pokedex;
