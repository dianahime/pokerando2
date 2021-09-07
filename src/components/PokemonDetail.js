import { useGetPokemonByNameQuery } from '../services/pokemon';
import { useSelector } from 'react-redux';
import { selectSelectedPokemonName } from '../store/pokemonSlice';

export const PokemonDetail = ({ onClose }) => {
  const selectedPokemonName = useSelector(selectSelectedPokemonName);
  const { data, error, isLoading, isSuccess, isError } =
    useGetPokemonByNameQuery(selectedPokemonName);

  if (!data) {
    return null;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {isSuccess && data && (
        <>
          <div>{data.name}</div>
          <button onClick={onClose}>close</button>
        </>
      )}
    </>
  );
};
