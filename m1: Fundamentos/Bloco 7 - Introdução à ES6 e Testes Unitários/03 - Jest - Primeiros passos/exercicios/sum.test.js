const sum = require('./sum')

describe('função soma', () => {
    it('A soma de 4 e 5 deve ser 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('A soma de 0 e 0 deve ser 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('Caso a soma seja de 4 com "5", acusar erro', () => {
        expect(() => {sum(4, '5')}).toThrow();
    });
    it('Caso a soma seja de 4 com "5", exibir erro', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters be numbers'));
    });
});