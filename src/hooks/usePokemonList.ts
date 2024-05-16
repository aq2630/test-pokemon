import { useEffect, useState } from "react";
import { useGetPokemonListQuery } from "features/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "hooks";
import { setPokemonList } from "features/pokemon/pokemonSlice";
import { selectPokemonListState } from "app/data/selectors/pokemonSelectors";

const usePokemonList = (offset = 0, limit = 10) => {
  const { data, error, isLoading } = useGetPokemonListQuery({ offset, limit });
  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector(selectPokemonListState);

  useEffect(() => {
    if (data) {
      dispatch(setPokemonList(data.results));
    }
  }, [data, dispatch, pokemonList.length, offset]);

  return { pokemonList, data, isLoading, error };
};

export default usePokemonList;
