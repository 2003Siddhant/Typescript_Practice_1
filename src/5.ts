interface user{
    id:number,
    name:string,
}
const users:user[]=[
    {id:1,name:"siddhant"},
    {id:2,name:"rahul"},
    {id:3,name:"rohit"},
]
users.forEach((a)=> console.log(a.name));

interface Student{
    id:number,
    name:string,
    subject:string[],
}
const stud:Student={
    id:1,
    name:"raj",
    subject:["maths","history","physics"]
}
console.log("students details are" + stud);
console.log(`subjects of the ${stud.name} are ${stud.subject}`);
console.log(`fav subject of the student is ${stud.subject[0]}`);


interface Employee{
    id:number,
    names:string,
    skills:string[],
}
const emp:Employee[]=[
    {id:1,names:"siddhu",skills:["dev","backend"]},
    {id:2,names:"shivv",skills:["rust","golang"]},
    {id:3,names:"atharva",skills:["frontend","cpp"]},
]
function printEmp(e:Employee[]){
    e.forEach((a)=> console.log(`employee name is ${a.names} and skills are ${a.skills}`));
}
printEmp(emp);