function Expect(array : number[],excluded : number[]) : number[]{
    const List = [];
      for(let element of array){
           if(!excluded.includes(element)){
             List.push(element)
  
           }
      }
  
    return List
  }
  
  const Result = expect([1,2,3,4],[4])
  console.log(Result)