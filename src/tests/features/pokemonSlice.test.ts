import pokemonReducer, {
  selectPokemon,
  setPokemonList,
} from "../../features/pokemon/pokemonSlice";
import { describe, test, expect } from "vitest";

describe("pokemon reducer", () => {
  const initialState = {
    selectedPokemon: null,
    pokemonList: [],
  };

  it("should call selectPokemon action", () => {
    const nextState = pokemonReducer(initialState, selectPokemon("Bulbasaur"));
    expect(nextState.selectedPokemon).toEqual("Bulbasaur");
  });

  it("should call setPokemonList action", () => {
    const nextState = pokemonReducer(
      initialState,
      setPokemonList([{ name: "Bulbasaur", url: "bulbasaur.url" }])
    );
    expect(nextState.pokemonList).toEqual([
      { name: "Bulbasaur", url: "bulbasaur.url" },
    ]);
  });
});
