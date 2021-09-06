import { useGetPokemonByNameQuery } from '../services/pokemon';
import { useSelector } from 'react-redux';
import { selectSelectedPokemonName } from '../store/pokemonSlice';

export const PokemonDetail = ({ onClose }) => {
  const selectedPokemonName = useSelector(selectSelectedPokemonName);
  const { data, error, isLoading } = useGetPokemonByNameQuery(selectedPokemonName);

  if (!data) {
    return null;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>{data.name}</div>
      <button onClick={onClose}>close</button>
    </>
  );
};
