const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Testa o Model de Movies', function () {
  describe('Insere um novo filme no BD', function () {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async function () {
      const execute = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async function () {
      connection.execute.restore();
    });

    describe('quando é inserido com sucesso', function () {
      it('retorna um objeto', async function () {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async function () {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });
    });
  });

  describe('Procura um filme por seu ID', function () {
    describe('Quando o filme não é encotrado', function () {
      const expectMovie = [[]];

      before(async function () {
        sinon.stub(connection, 'execute').resolves(expectMovie);
      });

      after(async function () {
        connection.execute.restore();
      });

      it('Retorna um array', async function () {
        const id = 999;
        const resultado = await MoviesModel.findById(id);
        expect(resultado).to.be.an('array');
      });
      it('O array retornado esta vazio', async function () {
        const id = 999;
        const resultado = await MoviesModel.findById(id);
        expect(resultado.length).to.be.equal(0);
      });
    });
    describe('Quando o filme é encontrado', function () {
      const expectMovie = [[{
        id: 1,
        title: 'Movie Teste',
        directedBy: 'Teste Director',
        releaseYear: '0000',
      }]];

      before(async function () {
        sinon.stub(connection, 'execute').resolves(expectMovie);
      });

      after(async function () {
        connection.execute.restore();
      });

      it('Retorna um array', async function () {
        const id = 1;
        const resultado = await MoviesModel.findById(id);
        expect(resultado).to.be.an('array');
      });

      it('O array contém um objeto', async function () {
        const id = 1;
        const resultado = await MoviesModel.findById(id);
        expect(resultado[0]).to.be.an('object');
      });

      it('O objeto tem as propriedades id, title, directedBy, releaseYear', async function () {
        const id = 1;
        const resultado = await MoviesModel.findById(id);
        expect(resultado[0]).to.have.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });

      it('As chaves do objeto contém os valores corretos', async function () {
        const id = 1;
        const resultado = await MoviesModel.findById(id);
        expect(resultado[0]).to.be.equal(expectMovie[0][0]);
      });
    });
  });
});