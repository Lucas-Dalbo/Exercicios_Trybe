const sum = require('./sum');

describe('Função soma', () => {
    it('A soma de 4 com 5 deve ser 9', () => {
        expect(sum(4,5)).toBe(9);
    })
});