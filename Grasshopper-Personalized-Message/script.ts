function Greet (name : string, owner : string) : string{
    // Add code here
      return name == owner ? 'Hello boss' : 	'Hello guest';
  
  }
  console.log(greet('Daniel','Daniel'))