// 1 - write a code to get an array of names into an array of users
// 2 - Get back only users active
const users  = [
    {
        id : 1,
        name : 'jack',
        isActivate : true
    },
     {
        id : 2,
        name : 'louis',
        isActivate : true
    },

     {
        id : 3,
        name : 'eva',
        isActivate : true
    }
]

let List = [];
users.filter((user) => user.isActivate).map((item) => {
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