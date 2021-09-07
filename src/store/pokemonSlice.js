import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    selectedPokemonName: null,
    // sortingType: 'AtoZ',
    // searchTerm: '',
  },
  reducers: {
    pokemonSelected: (state, action) => {
      state.selectedPokemonName = action.payload;
    },
    // setSortingType: (state, action) => {
    //   state.sortingType = action.payload;
    // },
    // setSearchTerm: (state, action) => {
    //   state.searchTerm = action.payload;
    // },
    // add to actions
  },
});

export const { pokemonSelected } = pokemonSlice.actions;

export const selectSelectedPokemonName = state => state.pokemon.selectedPokemonName;

// export const selectSortingType = state => state.pokemon.sortingType;
// export const selectSearchTerm = state => state.pokemon.searchTerm;

export default pokemonSlice.reducer;
