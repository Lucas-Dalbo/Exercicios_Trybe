const { expect } = require("chai");
const { writeFile } = require('../writeFile');
const sinon = require('sinon');
const fs = require('fs').promises;

describe('A função "writeFile"', () => {
  describe('Quando concluida com sucesso', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').resolves();
    });
  
    after(() => {
      fs.writeFile.restore();
    })

    it('Retonar "ok"', async () => {
      const retorno = await writeFile();
      expect(retorno).to.be.equal('ok');
    });

    it('Retorna uma string', async () => {
      const retorno = await writeFile();
      expect(typeof retorno).to.be.a('string');
    });
  });

  describe('Quando falhar', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').rejects();
    });
    
    after(() => {
      fs.writeFile.restore();
    })
  
    it('Retonar mensagem de erro', async () => {
      const retorno = await writeFile();
      expect(retorno).to.be.equal('Um erro ocorreu na criação do arquivo');
    });
  });
});