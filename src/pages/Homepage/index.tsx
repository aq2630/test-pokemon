import React, { useState } from "react";
import PokemonList from "components/PokemonList";
import { usePokemonList } from "hooks";
import Pagination from "components/Pagination";

const HomePage: React.FC = () => {
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;
  const { pokemonList, data, isLoading, error } = usePokemonList(offset, limit);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <PokemonList
        data={pokemonList.length ? pokemonList : data?.results ?? []}
      />
      <Pagination page={page} setPage={setPage} limit={limit} />
    </>
  );
};

export default HomePage;
