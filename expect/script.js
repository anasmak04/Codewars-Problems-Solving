function expect(array,excluded){
    const List = [];
      for(let element of array){
           if(!excluded.includes(element)){
             List.push(element)
  
           }
      }
  
    return List
  }
  
  const result = expect([1,2,3,4],[4])
  console.log(result)