// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, crr) => fusion = acc.concat(crr), []);
}

flatten(arrays);
// console.log(flatten(arrays));

// let novaarray = arrays[0].concat(arrays[1], arrays[2]);
// console.log(novaarray);