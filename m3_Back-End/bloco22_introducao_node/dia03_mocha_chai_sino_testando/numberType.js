const numberType = (numb) => {
  if(typeof numb !== "number") return 'O valor deve ser um número';

  switch (true) {
    case numb > 0:
      return 'positivo';
    case numb < 0:
      return 'negativo'
    default:
      return 'neutro';
  };
}

module.exports = { numberType };
