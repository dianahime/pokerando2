import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './services/pokemon';
import pokemonReducer from './store/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware),
});
