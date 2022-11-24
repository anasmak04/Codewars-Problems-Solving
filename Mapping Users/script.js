// 1 - write a code to get an array of names into an array of users
// 2 - Get back only users active
// 3 - sort by age of users descending
const users  = [
    {
        id : 1,
        name : 'jack',
        isActivate : true,
        age : 20
    },
     {
        id : 2,
        name : 'louis',
        isActivate : true,
        age : 22
    },

     {
        id : 3,
        name : 'eva',
        isActivate : true,
        age : 19
    }
]

let List = [];
users.filter((user) => user.isActivate && user.age).map((item) => {
    List.push(item.name)
})

for(let i = 0 ; i < users.length ; i++){
    if(users.isActivate !== false)
    List.push(users[i].name)
}



users.forEach(e => {
    if(e.isActivate !== false)
    List.push(e.name)
});
console.log(List)