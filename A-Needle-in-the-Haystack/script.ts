

function findNedle(haystack : String) : String | undefined {
    let index = haystack.indexOf("needle")
    for(let i of haystack){
      if(i == "needle")
      return  `found the needle at position ${index}`
    }  
  }

  