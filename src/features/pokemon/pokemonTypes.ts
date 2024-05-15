import { PokemonType } from "components/PokemonDetails/pokemonDetailsTypes";

export interface PokemonListTypes {
  name: string;
  url: string;
}

export interface PokemonListResponseTypes {
  results: PokemonListTypes[];
}

export interface PokemonDetailTypes {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  height: number;
  weight: number;
}
