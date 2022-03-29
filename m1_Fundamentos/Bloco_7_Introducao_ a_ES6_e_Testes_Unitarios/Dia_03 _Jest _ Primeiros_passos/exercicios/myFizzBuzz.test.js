function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Testes da função myFizzBuzz', () => {
  test('Se o a função é chamada com multiplo de 5 e de 3, deve retornar "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(45)).toBe('fizzbuzz');
  });
  test('Se for chamada com multiplo somente de 3, deve retornar "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(21)).toBe('fizz');
  });
  test('Se chamada com multiplo apenas de 5, deve retornar "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(35)).toBe('buzz');
  });
  test('Se chamada com um núemro que não é multiplo nem de 3 e nem de 5, deve retornar o próprio númeoro', () => {
    expect(myFizzBuzz(8)).toBe(8);
    expect(myFizzBuzz(16)).toBe(16);
  });
  test('Se chamada com um argumento que não é do tipo number, deve retornar "false"', () => {
    expect(myFizzBuzz('casa')).toBe(false);
    expect(myFizzBuzz(true)).toBe(false);
    expect(myFizzBuzz([0, 3, 5, 15])).toBe(false);
    expect(myFizzBuzz()).toBe(false);
    expect(myFizzBuzz({chave1: 3, chave2: 5})).toBe(false);
  });
});
