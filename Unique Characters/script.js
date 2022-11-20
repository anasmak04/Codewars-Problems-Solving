function isUnique(str){
   const chars = str.split('').sort();
   for(let i = 0 ; i < chars.length ; i++){
    if(chars[i] == chars[i - 1]){
        return false
    }
   } 

   return true
   
}


console.log(
   isUnique('abcdef'), // true
   isUnique('89@!/-'), // true
   isUnique('aA'), // true;
   isUnique('abca') // false;
   
);