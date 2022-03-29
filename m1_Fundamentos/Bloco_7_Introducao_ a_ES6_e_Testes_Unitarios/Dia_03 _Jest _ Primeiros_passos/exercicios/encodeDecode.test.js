const { encode, decode } = require('./encodeDecode');

describe('Testes das funções encode e decode', () => {
  test('Se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Se passado o argumento "aeiou" para encode, o retrono deve ser "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Se passado o argumento "12345" para decode, o retorno deve ser "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Se passado o argumento "bcdhj" para enconde, o retorno é o esperado', () => {
    const argument = 'bcdhj';
    expect((encode(argument))).toBe(argument);
  });
  test('Se passado o argumento "67890" para decode, o retorno é o esperado', () => {
    const argument = '67890';
    expect(decode(argument)).toBe(argument);
  });
  test('O retorno da função deve ter o mesmo tamanho que o argumento passado', () => {
    const argument = 'a2i4u';
    expect(encode(argument).length).toEqual(argument.length);
    expect(decode(argument).length).toEqual(argument.length);
  })
});
