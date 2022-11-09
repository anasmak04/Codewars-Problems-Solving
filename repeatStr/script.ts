function Teest(n : number,s : string) : string{
    let str = "";
   for(let i = 0 ; i < n ; i++ ){
     str+=s;
   }
   return str;
  
   
 }
 
 console.log(Teest(3,'*'))