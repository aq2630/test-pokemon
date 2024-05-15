import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export const selectPokemonList = (state: RootState) =>
  state.pokemon.pokemonList;

export const selectSelectedPokemon = (state: RootState) =>
  state.pokemon.selectedPokemon;

export const selectPokemonListState = createSelector(
  [selectPokemonList, selectSelectedPokemon],
  (pokemonList, selectedPokemon) => ({
    pokemonList,
    selectedPokemon,
  })
);
