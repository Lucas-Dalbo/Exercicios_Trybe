// const { combineReducers, createStore } = require('redux');
const nome01 = document.getElementById('nome-1');
const sobre01 = document.getElementById('sobrenome-1');
const nome02 = document.getElementById('nome-2');
const sobre02 = document.getElementById('sobrenome-2');

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const PRIMEIRO_ESTADO = 'PRIMEIRO_ESTADO';
const SEGUNDO_ESTADO = 'SEGUNDO_ESTADO';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case PRIMEIRO_ESTADO:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case SEGUNDO_ESTADO:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

// 1 - Combine os reducers existentes com a função combineReducers e salve-o em uma constante.
const allReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

// 2 - Crie uma store com a combinação dos reducers.
const store = Redux.createStore(allReducers);

// 3 - Crie actions que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer.
const alteraEstado01 = (nome, sobrenome) => {
  const action = {
    type: PRIMEIRO_ESTADO,
    nome,
    sobrenome,
  };
  store.dispatch(action);
}

const alteraEstado02 = (nome, sobrenome) => {
  const action = {
    type: SEGUNDO_ESTADO,
    nome,
    sobrenome,
  };
  store.dispatch(action);
}

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer  } = store.getState();

  nome01.innerText = meuPrimeiroReducer.nome;
  sobre01.innerText = meuPrimeiroReducer.sobrenome;

  nome02.innerText = meuSegundoReducer.nome;
  sobre02.innerText = meuSegundoReducer.sobrenome;
});

window.onload = () => {
  setTimeout(() => {
    alteraEstado01('Oscar', 'Neymar');
    alteraEstado02('Jucelino', 'Kubicheck');
  }, 3000);
};
