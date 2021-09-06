import { useGetAllPokemonQuery } from '../services/pokemon';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { PokemonListItem } from './PokemonListItem';

const LIST_SIZE = 10;

export const PokemonList = () => {
  const { data, error, isLoading } = useGetAllPokemonQuery();
  const [listLimit, setListLimit] = useState(LIST_SIZE);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const pokemonList = data && [...data.results]?.slice(0, listLimit);
  const handleMorePokemon = () => setListLimit(listLimit + LIST_SIZE);

  return (
    <>
      <List>{data && pokemonList.map(item => <PokemonListItem item={item} key={item.url} />)}</List>

      <Button
        color='secondary'
        variant='contained'
        disabled={data.results.length < listLimit}
        onClick={handleMorePokemon}
      >
        Load more
      </Button>
    </>
  );
};
