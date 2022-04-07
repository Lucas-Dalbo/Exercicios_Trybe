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
        {data.map((map) => <Pokemom pokeinfo= {map} key={map.id}/>)}
      </div>
    </main>
  );
}

export default App;
