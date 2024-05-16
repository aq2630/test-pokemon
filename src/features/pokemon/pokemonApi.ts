import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonDetailTypes, PokemonListResponseTypes } from "./pokemonTypes";

const baseUrl = import.meta.env.VITE_BASE_API_URL || "https://pokeapi.co";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/v2` }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<
      PokemonListResponseTypes,
      { offset: number; limit: number }
    >({
      query: ({ offset, limit }) => `/pokemon?offset=${offset}&limit=${limit}`,
    }),
    getPokemonByName: builder.query<PokemonDetailTypes, string>({
      query: (id) => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;
