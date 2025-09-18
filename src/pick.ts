interface user{
    id:number,
    name:string,
    age:number,
    password:string,
    salary:number
}
function update(a:Pick<user,"id"|"name"|"age"|"salary">){
    console.log(`user details are ${a.id} and name is ${a.name} with age and salry is ${a.age} and ${a.salary}`)
}
update({id:1,name:"sidd",age:22,salary:200000})

type tsc=Pick<user,"name"|"age"|"salary">
const u:tsc={name:"ram",age:89,salary:33321};
console.log(u);