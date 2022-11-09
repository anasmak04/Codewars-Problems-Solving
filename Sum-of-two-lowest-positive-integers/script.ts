function SumTwoSmallestNumbers(numbers : number[]) : number {  
     numbers.sort(function(a,b){return a - b})
    let firstLowvalue = numbers[0];
    let secondLowvalue = numbers[1]; 
    let sum = firstLowvalue+secondLowvalue;
    return sum;
}
