function Check(a : number[], x : number) : boolean {
    // your code here
    for (let item of a) {
        if (x == item) {
            return true
        }
    }
    return false;
}

console.log(check([1, 2], 5))