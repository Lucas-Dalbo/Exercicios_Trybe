const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // 1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const newKey = (obj, chave, valor) => obj[chave] = valor;
  
  newKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  // 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const objKeys = obj => Object.keys(obj);

  console.log(objKeys(lesson1));

  // 3. Crie uma função para mostrar o tamanho de um objeto.
  const objLength = obj => Object.keys(obj).length;

  console.log(objLength(lesson1));

  // 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro
  const objValues = obj => Object.values(obj);

  console.log(objValues(lesson3));

  // 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
  let allLessons;
  const allLess = (obj1, obj2, obj3) => {
    allLessons = {lesson1: Object.assign({}, obj1), lesson2: Object.assign({},obj2), lesson3: Object.assign({},obj3)};
    return allLessons
  }
  allLess(lesson1,lesson2,lesson3);
  console.log(allLessons);

  // 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
  const numbEstudantes = obj => {
    let estudantes = 0;
    for (let key in obj) {
      estudantes += obj[key].numeroEstudantes;
    }
    return `No total, existem ${estudantes} estudantes.`
  }
  console.log(numbEstudantes(allLessons));

  // 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  const getValueByID = (obj, id) => Object.values(obj)[id];

  console.log(getValueByID(lesson2, 0));

  // 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
  const checkPairs = (obj, key, value) => {
    let pares = Object.entries(obj);
    let temPar = 0;
    for (const index in pares) {
      pares[index].includes(key) && pares[index].includes(value) ? temPar += 1 : temPar += 0;
    }
    temPar >= 1 ? bolen = true : bolen = false;
    return bolen
  }

  console.log(Object.entries(lesson3));
  console.log(checkPairs(lesson3, 'turno', 'noite'));
  console.log(checkPairs(lesson3, 'materia', 'Física'));