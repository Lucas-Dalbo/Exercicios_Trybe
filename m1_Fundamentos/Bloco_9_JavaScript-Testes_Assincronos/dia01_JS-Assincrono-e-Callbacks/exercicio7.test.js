// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas

const { expect, it } = require("@jest/globals");

// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Verifica a função uppercase', () => {
  it('Verifica a palavra "coisas"', (done) => {
    const expResult = 'COISAS';

    uppercase('coisas', (callback) => {
      try {
        expect(callback).toBe(expResult);
        done();
      } catch (error) {
        done(error);
      }
    })
  });

  it('Verifica a palavra ReGuLaR', (done) => {
    const expResult = 'REGULAR';

    uppercase('ReGuLaR', (callback) => {
      try {
        expect(callback).toBe(expResult);
        done()
      } catch (e) {
        done(e);
      }
    });
  });
});