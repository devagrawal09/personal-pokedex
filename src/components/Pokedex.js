import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import PokemonPopup from "./PokemonPopup";
import Header from "./Header";
import Footer from "./Footer";
import { getPokemons } from "../services/pokemons";

const pageLimit = 9;

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, selectPokemon] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemons(page * pageLimit, pageLimit).then((data) => {
      setPokemons(data);
    });
  }, [page]);

  const next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const back = () => {
    setPage((prevPage) => (prevPage ? prevPage - 1 : 0));
  };

  return (
    <>
      <Header />
      <div className="cards">
        {pokemons.results?.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            onClick={() => selectPokemon(pokemon)}
          />
        ))}
      </div>
      <PokemonPopup
        selectedPokemon={selectedPokemon}
        close={() => selectPokemon(null)}
      />
      <Footer back={back} next={next} page={page} />
    </>
  );
};

export default Pokedex;
