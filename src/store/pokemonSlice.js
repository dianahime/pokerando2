import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    selectedPokemonName: null,
  },
  reducers: {
    pokemonSelected: (state, action) => {
      state.selectedPokemonName = action.payload;
    },
  },
});

export const { pokemonSelected } = pokemonSlice.actions;

export const selectSelectedPokemonName = state => state.pokemon.selectedPokemonName;

export default pokemonSlice.reducer;
