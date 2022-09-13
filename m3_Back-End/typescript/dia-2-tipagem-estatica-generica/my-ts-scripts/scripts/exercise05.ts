type filter <T> = (value: T, index?: number, array?: T[] ) => boolean;

function myFilter <T> (array: T[], callback: filter<T>) :T[] {
    const filterArray: T[] = [];

    for (let i = 0; i < array.length; i += 1) {
        const result = callback(array[i], i, array);
        if(result) filterArray.push(array[i]);
    }

    return filterArray;
}



console.log(myFilter([1, 2, 3], (item) => item > 1 ));

console.log(
    myFilter([
    { casa: 'abc', numero: 1},
    { casa: '123', numero: 2},
    ], ({casa}) => casa === 'abc')
);