// M1

function FindAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] / array.length;
    }

    return sum;
}

console.log(findAverage([79, 5, 97, 91, 10, 46, 84, 15, 52, 76, 34, 58]))


//   M2

function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((acc, curr) => acc + curr) / array.length;
}