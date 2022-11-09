function countPositivesSumNegatives(input) {
    let sum = 0;
    let score = 0;
    let List = [];

    if (input == null) {
        return []
    }
    if (input.length == 0) {
        return []
    }

    for (let item of input) {
        if (item > 0)
            sum++;
    }

    for (let element of input) {
        if (element < 0)
            score += element;
    }

    List.push(sum);
    List.push(score)
    return List
}
let result = countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
console.log(result)