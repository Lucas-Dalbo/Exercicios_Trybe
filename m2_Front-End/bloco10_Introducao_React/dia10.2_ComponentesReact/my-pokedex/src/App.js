import './App.css';
import data from './data'
import Pokemom from './components/Pokemon';

function App() {
  return (
    <main>
      <header className='header'>
        <h1 className='title'>POKEDEX</h1>
      </header>
      <div className='poke-container'>
        <Pokemom pokeinfo= { data[0] }/>
      </div>
    </main>
  );
}

export default App;
