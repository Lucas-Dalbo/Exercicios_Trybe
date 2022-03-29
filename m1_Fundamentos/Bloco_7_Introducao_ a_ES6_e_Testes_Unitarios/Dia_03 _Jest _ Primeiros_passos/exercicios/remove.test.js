function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // implemente seus testes aqui

  describe('Função myRemove', () => {
    const testArray = [1, 2, 3, 4];
    it('Se a entrada for [1,2,3,4] e 3, deve retornar [1,2,4]', () => {
        expect(myRemove(testArray, 3)).toEqual([1, 2, 4]);
    });
    it('Se a função não retorna o primeiro argumento', () => {
      const expected = myRemove(testArray, 3);
      expect(expected).not.toEqual(testArray);
    });
    it('Se a entrada for (testArray, 5) deve retornar testArray', () => {
      expect(myRemove(testArray, 5)).toEqual(testArray);
    });
  });
  