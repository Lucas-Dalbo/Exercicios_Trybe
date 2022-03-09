const registro = (nome) => {
let name = nome.split(' ');
let emailName;
if (name.length > 1) {
    for (let index = 0; index < name.length - 1; index += 1) {
        name[index] = `${name[index]}_`;
    }
    emailName = name.join('')
} else {
    emailName = name[0];
}
return {
  nomeCompleto: nome,
  email: `${emailName.toLowerCase()}.@trybe.com`,
  };
}

const newEmployees = () => {
    const employees = {
      id1: registro('Pedro Garra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: registro('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: registro('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees());
