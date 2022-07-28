const { expect } = require("chai");

describe('A função "numberType"', () => {
  describe('Quando o número é maior que 0', () => {
    it('retorna "positivo"', () => {
      const resultado = numberType(-1);
      expect(resultado).to.be.equals('positivo');
    });
  });

  describe('Quando o número é menor que 0', () => {
    it('retorna "negativo"', () => {
      const resultado = numberType(1);
      expect(resultado).to.be.equals('negativo');
    });
  });

  describe('Quando o número é igual a 0', () => {
    it('retorna "neutro"', () => {
      const resultado = numberType(0);
      expect(resultado).to.be.equals('neutro');
    });
  });
});