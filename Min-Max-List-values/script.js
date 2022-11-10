var min = function(list){
    
    list.sort(function(a,b){return a - b});
    let minimum = list[0];
    return minimum;
}

var max = function(list){
   list.sort(function(a,b){return a - b});    
   let maximum = list[list.length -1];
   return maximum;
}