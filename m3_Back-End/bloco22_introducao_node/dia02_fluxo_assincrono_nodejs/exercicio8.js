const fizzBuzz = async (numb) => {
  if (!Number.isInteger(numb)) throw { message: 'Número precisa ser inteiro' };
  if (numb < 0) throw { message: 'Número não pode ser menor que Zero' };

  switch (true) {
    case numb % 3 === 0 && numb % 5 === 0:
      return 'FizzBuzz'
    case numb % 3 === 0:
      return 'Fizz'
    case numb % 5 === 0:
      return 'Buzz'
    default:
      return numb;
  }
};

const callFizzBuzz = async (numb) => {
  try {
    const resultado = await fizzBuzz(numb);
    console.log(resultado);
  } catch (erro) {
    console.log('Erro:', erro.message);
  }
}

callFizzBuzz(3); // Fizz
callFizzBuzz(5); // Buzz
callFizzBuzz(15); // FizzBuzz
callFizzBuzz(8); // 8
callFizzBuzz(-15); // Erro
callFizzBuzz(-1.5); // Erro
