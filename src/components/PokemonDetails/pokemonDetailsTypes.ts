export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetailsObjectTypes {
  name: string;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  height: number;
  weight: number;
}

export interface PokemonDetailsProps {
  data?: PokemonDetailsObjectTypes;
}

export enum PokemonDataKeys {
  NAME = "name",
  HEIGHT = "height",
  WEIGHT = "weight",
  TYPES = "types",
}
