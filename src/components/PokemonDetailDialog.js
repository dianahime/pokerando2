import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedPokemonName } from '../store/pokemonSlice';
import Dialog from '@material-ui/core/Dialog';
import { pokemonSelected } from '../store/pokemonSlice';
import { PokemonDetail } from './PokemonDetail';

export const PokemonDetailDialog = () => {
  const selectedPokemonName = useSelector(selectSelectedPokemonName);
  const dispatch = useDispatch();

  return (
    <Dialog
      onClose={() => dispatch(pokemonSelected(null))}
      aria-labelledby='simple-dialog-title'
      open={selectedPokemonName !== null}
    >
      {selectedPokemonName && <PokemonDetail onClose={() => dispatch(pokemonSelected(null))} />}
    </Dialog>
  );
};
