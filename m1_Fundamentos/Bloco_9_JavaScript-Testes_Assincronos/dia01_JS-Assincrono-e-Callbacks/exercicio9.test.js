// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, pokemons } = require("./exercicio8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const errorMesage = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Pikachu',
      (err, suc) => {
        try {
          expect(err).toEqual(errorMesage);
          done()
        } catch (e) {
          done(e);
        }
      }
    )
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const esperado = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur',
      (err, suc) => {
        try {
          expect(suc).toBe(esperado);
          done()
        } catch (e) {
          done(e);
        }
      }
    )
  });
});