import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query({
      query: () => `pokemon?limit=100&offset=0`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;
