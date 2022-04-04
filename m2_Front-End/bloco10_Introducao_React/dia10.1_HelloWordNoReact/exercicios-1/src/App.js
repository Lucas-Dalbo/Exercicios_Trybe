
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const promises = [ 'Dedicação', 'Comprometimento', 'Foco', 'Dizer não as drogas' ]

function App() {
  return (
    <div>
    <h2>COMPROMISSOS</h2>
    <ul>
      {promises.map((el) => Task(el))}
    </ul>
    </div>
  )
}

export default App;
