// Write a JavaScript program to sort a list of elements using Quick sort.

function sortQ(array) {
    if (array.length < 2) return array

    let left = [];

    let right = [];

    let pivot = array[array.length - 1];

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivot) left.push(array[i])

        else right.push(array[i])

    }

    return [...sortQ(left), pivot, ...sortQ(right)]
    
}
console.log(sortQ([5, 7, 8, -5, 1, 0])) // [ -5, 0, 1, 5, 7, 8 ]