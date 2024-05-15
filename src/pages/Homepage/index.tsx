import React from "react";
import PokemonList from "components/PokemonList";
import { usePokemonList } from "hooks";

const HomePage: React.FC = () => {
  const { pokemonList, data, error, isLoading } = usePokemonList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <PokemonList
      data={pokemonList.length ? pokemonList : data?.results ?? []}
    />
  );
};

export default HomePage;
