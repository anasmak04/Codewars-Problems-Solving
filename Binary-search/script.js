// Given an array of integers nums which is sorted in ascending order,
//  and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

let search = function (nums, target) {
    let array = nums.sort(function (a, b) { return a - b });
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        if (target == array[middleIndex]) {
            return middleIndex
        }
        if (target < array[middleIndex]) {
            lastIndex = middleIndex - 1;
        }
        else {
            firstIndex = middleIndex + 1;
        }
    }
    return -1
};

// Big-o ==> O(log n)