
function digitizee(n : number) : any  {
    let numbers = n.toString();
    let strToArray =numbers.split('');
    let sortArray = strToArray.reverse().map(Number);
    console.log(sortArray)

        
}
 digitize(35231)