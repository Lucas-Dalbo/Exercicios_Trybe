function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// 1. Lista de Dias
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const days = document.getElementById("days");

function monthDays(dias) {
  for (let element of dias) {
    let dayNumber = document.createElement("li");
    dayNumber.innerText = element;
    dayNumber.className = " day";

    if (element === 24 || element === 25 || element === 31) {
      dayNumber.className += " holiday";
    };

    if (element === 4 || element === 11 || element === 18 || element === 25) {
      dayNumber.className += " friday";
    };

    days.appendChild(dayNumber);
  }
};

monthDays(dezDaysList);

// 2. Botão dos Feriados
const buttonsContainer = document.getElementsByClassName("buttons-container")[0];

function btnCriador(nome, id) {
  let botao = document.createElement("button");
  botao.id = id;
  botao.innerText = nome;

  buttonsContainer.appendChild(botao);
};

btnCriador("Feriados", "btn-holiday");

// 3. Função do Botão
const btnFeriados = document.querySelector("#btn-holiday");
const feriados = document.getElementsByClassName("holiday");


function corFeriados () {
  for ( let index = 0; index < feriados.length ; index += 1 ) {
      if (feriados[index].style.backgroundColor === "") { 
        feriados[index].style.backgroundColor = "rgb(255,255,0)"; 
      }
      else {
        feriados[index].style.backgroundColor = "";
      }
  }
};

btnFeriados.addEventListener("click", corFeriados);

// 4. Botão da Sexta Feira
btnCriador("Sexta-feira", "btn-friday");

// 5. Função do Botão 2
const btnSexta = document.querySelector("#btn-friday");
const sextaFeira = document.getElementsByClassName("friday");

function showFriday () {
  for ( let index = 0; index < sextaFeira.length ; index += 1 ) {
    if (sextaFeira[index].innerText === "SEXTOU") { 
      sextaFeira[index].innerText = sextaFeira[index].innerText = "" + (index*7 + 4);
    }
    else {
      sextaFeira[index].innerText = "SEXTOU"
    }
  }
};

btnSexta.addEventListener("click", showFriday)

// 6. Zoom In e Zoom Out
days.addEventListener ("mouseover", function (event) {
  event.target.style.fontSize = "25px";
});

days.addEventListener ("mouseout", function (event) {
  event.target.style.fontSize = "20px";
});

// 7. Tarefa Personalizada
const myTasks = document.querySelector(".my-tasks")

function criaTarefa (task) {
  let tarefa = document.createElement("span");
  tarefa.innerText = task;

  myTasks.appendChild(tarefa);
};

criaTarefa("jogar pembolim");

//8. Legenda
function criaLegenda (cor) {
  let legCor = document.createElement("div");
  legCor.className = "task";
  legCor.style.backgroundColor = cor;

  myTasks.appendChild(legCor);
};

criaLegenda("blue");

//9. Selecionar Tarefa
const taskColor = document.getElementsByTagName("div")[3];
let corTarefa = "";
let selecidonado;

function selection (event) {
  if ( event.target.className === "task") {
    event.target.className += " selected";
    corTarefa = event.target.style.backgroundColor;
    selecidonado = true;
  }
  else if ( event.target.className === "task selected") {
    event.target.className = "task";
    corTarefa = "";
    selecidonado = false;
  }
}

taskColor.addEventListener ("click", selection)

// 10. Atribuindo Dias
days.addEventListener ("click", function (event){
  if (event.target.style.color !== "") {
    event.target.style.color = "";
  }
  else if (selecidonado === true) {
    event.target.style.color = corTarefa;
  }
});

// 11. Bõnus
const addComp = document.getElementById("btn-add");
const input = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");

function adicionarCompromisso () {
  if ( input.value === "") {
    alert("Escreva algum compromisso para adicionar!");
  }
  else {
    let compro = document.createElement("li");
    compro.innerText = input.value;
    
    taskList.appendChild(compro);
  }
}

function keyEvent (event) {
  let x = event.key;
  if ( x === "Enter") {
    adicionarCompromisso();
  } 
}

addComp.addEventListener("click", adicionarCompromisso);
input.addEventListener("keyup", keyEvent);