import { useEffect } from "react";
import { useGetPokemonListQuery } from "features/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "hooks";
import { setPokemonList } from "features/pokemon/pokemonSlice";
import { selectPokemonListState } from "app/data/selectors/pokemonSelectors";

const usePokemonList = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();
  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector(selectPokemonListState);

  useEffect(() => {
    if (data && !pokemonList.length) {
      dispatch(setPokemonList(data.results));
    }
  }, [data, dispatch, pokemonList.length]);

  return { pokemonList, data, isLoading, error };
};

export default usePokemonList;
