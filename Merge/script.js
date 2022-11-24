// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together 
// the nodes of the first two lists.
// without any functions

let mergeTwoLists = function(list1, list2) {

    let array = [...list1,...list2];
 let swapped
    do {
        swapped = false
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped);
 return array
};