function containsCommonItems(array1,array2){
    for(let i = 0 ; i < array1.length; i++){
     for(let j = 0 ; j < array2.length ;j++){
      if(array1[i] === array2[j]){
       return true
      }
     }
    } 
  return false;
 }
 
 containsCommonItems(['a','b'],['x','b'])
 
 //////// time complexity o(n^2); QUADRATIC
