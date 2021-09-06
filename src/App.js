import { PokemonDetailDialog } from './components/PokemonDetailDialog';
import { PokemonList } from './components/PokemonList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './pages/About';
import FavouritePage from './pages/Favourite';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/favourites'>Favourites</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/favourites'>
              <FavouritePage />
            </Route>
            <Route path='/'>
              <PokemonList />
            </Route>
          </Switch>
        </div>
      </Router>
      <PokemonDetailDialog />
    </>
  );
}

export default App;
