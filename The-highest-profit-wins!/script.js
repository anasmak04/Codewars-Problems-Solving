    function minMax(arr){
    const List = [];
      arr.sort(function(a,b) {return a - b})
      let min = arr[0];
      let max = arr[arr.length - 1];
  
      List.push(min,max)
  
    return List;
    
  }
  
  let result = minMax([555,6,3])
  console.log(result)