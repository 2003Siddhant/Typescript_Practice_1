interface User{
    id:number,
    name:string,
    isadmin:boolean,
}
const u1:User={
    id:2,
    name:"sidd",
    isadmin:true,
}
console.log(u1);
console.log("name of the user is " + u1.name);
console.log("is user an admin " + u1.isadmin);