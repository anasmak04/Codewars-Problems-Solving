function Hello(name : string) : string{
    if(name){
      return `hello ${ name.charAt(0).toUpperCase() }${ name.slice(1).toLowerCase()}`
    }
  
    else {
      return 'Hello , World !'
    }
  }
  
  console.log(hello("anas"));