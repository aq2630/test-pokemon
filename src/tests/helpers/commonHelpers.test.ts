import { capitalizeString, extractPokemonId } from "app/data/helpers";
import { describe, test, expect } from "vitest";

describe("capitalizeString function", () => {
  test("capitalizes the string", () => {
    expect(capitalizeString("bulbasaur")).toBe("Bulbasaur");
  });
});

describe("extractPokemonId function", () => {
  test("extracts ID from Pokemon URL", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/25/";
    expect(extractPokemonId(url)).toEqual("25");
  });
});
