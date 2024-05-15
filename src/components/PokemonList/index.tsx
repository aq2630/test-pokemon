import React, { useCallback } from "react";
import { useAppDispatch } from "hooks";
import { selectPokemon } from "features/pokemon/pokemonSlice";
import { useNavigate } from "react-router-dom";
import "./pokemonList.css";
import { capitalizeString, extractPokemonId } from "app/data/helpers";
import { PokemonListProps, Pokemon } from "./pokemonListTypes";
import { POKEMON_LIST_TITLE } from "./pokemonListConstants";

const PokemonList: React.FC<PokemonListProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePokemon = useCallback(
    (pokemon: Pokemon) => {
      dispatch(selectPokemon(pokemon.name));
      navigate(`/pokemon/${extractPokemonId(pokemon.url)}`);
    },
    [dispatch, navigate]
  );

  if (!data) return <div>No data available</div>;

  return (
    <main className="homepage_container">
      <div className="main_list_container">
        <p className="list_title">{POKEMON_LIST_TITLE}</p>
        {data.map((pokemon, index) => (
          <div
            role={`listitem`}
            key={`${pokemon.name}-${index}`}
            onClick={() => handlePokemon(pokemon)}
          >
            <h4>{capitalizeString(pokemon.name)}</h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PokemonList;
