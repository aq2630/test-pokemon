import { PokemonDataKeys } from "./pokemonDetailsTypes";

export const POKEMON_DETAILS_VALUES: { [key in PokemonDataKeys]: string } =
  Object.freeze({
    [PokemonDataKeys.NAME]: "Name",
    [PokemonDataKeys.HEIGHT]: "Height",
    [PokemonDataKeys.WEIGHT]: "Weight",
    [PokemonDataKeys.TYPES]: "Types",
  });
