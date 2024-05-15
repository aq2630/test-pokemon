import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonListTypes } from "./pokemonTypes";

interface PokemonState {
  selectedPokemon: string | null;
  pokemonList: PokemonListTypes[];
}

const initialState: PokemonState = {
  selectedPokemon: null,
  pokemonList: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemon = action.payload;
    },
    setPokemonList: (state, action: PayloadAction<PokemonListTypes[]>) => {
      state.pokemonList = action.payload;
    },
  },
});

export const { selectPokemon, setPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
