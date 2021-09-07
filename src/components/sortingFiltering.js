import { useGetAllPokemonListQuery } from '../sevirces/pokemon';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextPage,
  prevPage,
  pokemonSelected,
  selectPageNumber,
  selectPageSize,
  selectSortingType,
  setSortingType,
  selectSearchTerm,
  setSearchTerm,
} from '../features/pokemon/pokemonSlice';
import { Link } from 'react-router-dom';

const AllPokemonList = () => {
  const pageNumber = useSelector(selectPageNumber);
  const pageSize = useSelector(selectPageSize);
  const sortingType = useSelector(selectSortingType);
  const searchTerm = useSelector(selectSearchTerm);

  const { data, error, isLoading } = useGetAllPokemonListQuery();
  const dispatch = useDispatch();

  const sortings = {
    AtoZ: (a, b) => a.name.localeCompare(b.name),
    ZtoA: (a, b) => b.name.localeCompare(a.name),
  };

  if (error) {
    return <>Oh no, there was an error</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  const pokemonListPage = [...data.results]
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(sortings[sortingType])
    .slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

  return (
    <>
      <select onChange={event => dispatch(setSortingType(event.target.value))}>
        <option value='AtoZ'>A to Z</option>
        <option value='ZtoA'>Z to A</option>
      </select>

      <input
        placeholder='search pokemon'
        onChange={event => dispatch(setSearchTerm(event.target.value))}
      ></input>

      <div>{data?.count} pokemons found</div>
      <button disabled={pageNumber < 2} onClick={() => dispatch(prevPage())}>
        Prev Page
      </button>
      {pageNumber}
      <button disabled={pageSize * pageNumber > data?.count} onClick={() => dispatch(nextPage())}>
        Next Page
      </button>

      <ul>
        {data &&
          pokemonListPage.map(pokemon => (
            <>
              <Link to={`/pokemon/${pokemon.name}`}>
                <div key={pokemon.url} onClick={() => dispatch(pokemonSelected(pokemon.name))}>
                  <span>{pokemon.name}</span>
                </div>
              </Link>
            </>
          ))}
      </ul>
    </>
  );
};

export default AllPokemonList;
