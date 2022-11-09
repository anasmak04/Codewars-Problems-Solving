function invert(array) {
    const arr = [];
    if(array.length ==0 )
      return array
    for(let e of array){
        arr.push(-e)
      }

     return arr
}
