function Includes(array : number[],searchElement : number) : Boolean | undefined {
    for(let key of array)
      {
        return key == searchElement ? true : false
      }
  }
  
