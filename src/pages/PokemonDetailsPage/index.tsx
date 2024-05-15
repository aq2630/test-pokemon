import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "features/pokemon/pokemonApi";
import PokemonDetails from "components/PokemonDetails";

const PokemonDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetPokemonByNameQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <PokemonDetails data={data} />;
};

export default PokemonDetailsPage;
