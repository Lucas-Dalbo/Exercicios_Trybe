const service = require('./service');

test('Se a função é chamada', () => {
  service.randomNumb = jest.fn()
  service.randomNumb();
  expect(service.randomNumb).toBeCalled();
});

test('Se o retorno é um número', () => {
  service.randomNumb = jest.fn().mockReturnValue(10);
  service.randomNumb();
  expect(service.randomNumb).toBeCalledTimes(1);
  expect(typeof service.randomNumb()).toBe('number');
  expect(service.randomNumb()).toBe(10);
  expect(service.randomNumb).toBeCalledTimes(3);
})