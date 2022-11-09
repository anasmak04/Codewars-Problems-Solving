function Friend(friends : string[]) : string[]{
    let List = [];
  for(let item of friends){
   if(item.length == "4")
       List.push(item)
  }
  console.log(List);

}

Friend(["Ryan", "Kieran", "Mark"])