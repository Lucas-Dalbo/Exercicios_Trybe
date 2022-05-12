const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const colorName = document.getElementById('value');
const container = document.getElementById('container');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

// 2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como default.
const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
// 3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR.
  case NEXT_COLOR:
    return {
      ...state,
      index: state.index === state.colors.length - 1 ? state.index = 0 : state.index += 1,
    }
  case PREVIOUS_COLOR:
    return {
      ...state,
      index: state.index === 0 ? state.index = state.colors.length - 1 : state.index -= 1,
    }
  case RANDOM_COLOR:
    return {
      ...state,
      colors: [...state.colors, action.color],
      index: state.colors.length,
    }
  default:
    return state;
  }
};

// 1 - Crie uma store para a nossa aplicação.
const store = Redux.createStore(reducer);

// 4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com o respectivo action.type de cada.
const nextClick = () => {
  const action = {
    type: NEXT_COLOR
  }
  store.dispatch(action);
};

const prevClick = () => {
  const action = {
    type: PREVIOUS_COLOR
  }
  store.dispatch(action);
};

nextBtn.addEventListener('click', nextClick);
prevBtn.addEventListener('click', prevClick);


// 5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container.
store.subscribe(() => {
  const { index, colors } = store.getState();
  colorName.innerText = colors[index];
  container.style.backgroundColor = colors[index];
});

// 6 - Crie um botão com o texto Random color, um eventListener e uma action no reducer adicionando uma cor aleatória ao array colors guardado em nosso estado inicial.
const randomBtn = document.getElementById('random');

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const rngClick = () => {
  const action = {
    type: RANDOM_COLOR,
    color: criarCor(),
  }
  store.dispatch(action);
}

randomBtn.addEventListener('click', rngClick);
