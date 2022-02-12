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

  for ( let element of dezDaysList) {
    let dayNumber = document.createElement("li");
    dayNumber.innerText = element ;
    dayNumber.className = " day";

    if ( element === 24 ||  element === 25 ||  element === 31 ) {
      dayNumber.className += " holiday";
    };
    
    if ( element === 4 ||  element === 11 ||  element === 18 || element === 25) {
      dayNumber.className += " friday";
    };
        
    days.appendChild(dayNumber);
  };

 