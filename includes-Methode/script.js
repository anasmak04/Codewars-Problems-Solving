function includes(array,searchElement){
    for(let key of array)
      {
        return key == searchElement ? true : false
      }
  }
  
  const result = includes([1,2],77)
  console.log(result)