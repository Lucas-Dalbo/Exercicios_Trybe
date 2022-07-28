const { expect } = require("chai");

describe('A função "writeFile"', () => {
  describe('Quando concluida', () => {
    it('Retonar "ok"', () => {
      const retorno = writeFile();
      expect(retorno).to.be.equal('ok');
    });

    it('Retorna uma string', () => {
      const retorno = writeFile();
      expect(typeof retorno).to.be.a('string');
    });
  });
});