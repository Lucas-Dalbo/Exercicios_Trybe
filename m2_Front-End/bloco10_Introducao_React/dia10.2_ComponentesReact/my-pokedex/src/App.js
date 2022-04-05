import './App.css';
import data from './data'
import Pokemom from './components/Pokemon';

function App() {
  return (
    <main>
      <header>
        <h1>POKEDEX</h1>
      </header>
      <div>
        <Pokemom pokeinfo= { data }/>
      </div>
    </main>
  );
}

export default App;
