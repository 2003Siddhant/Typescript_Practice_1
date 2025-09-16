interface User{
    firstname:string,
    lastname:string,
    email:string,
    age:number,
}
function legal(user:User){
    if(user.age>18){
        if(user.firstname.startsWith("s") ||user.firstname.startsWith("A")){
            return true;
        }
    }
    return false;
}
const a=legal({firstname:"siddhant",lastname:"sakhare",email:"sidd@gmail.com",age:20})
console.log(a);

interface Person{
    id:number,
    firstname:string,
    lastname:string,
    email:string,
    age:number,
    ismarried:boolean,
    skills:string[],
}

function check(a:Person){
    if(a.firstname.startsWith("s") && a.firstname.endsWith("t")){
        console.log(`firstname if ${a.firstname}`);
        if(a.lastname.startsWith("s") && a.lastname.endsWith("e")){
            console.log(`lastname is ${a.lastname}`);
            if(a.age>20){
                console.log(`age of the user is ${a.age}`)
                if(a.skills.includes("cpp") && a.skills.includes("rust")){
                    console.log(`user has cpp and rust knowledge`)
                }
                else {
                    console.log("enter valid skills");
                }
            }
            else{
                console.log("enter valid age");
            }
        }
        else{
            console.log("enter valid lastname");
        }
    }
    else{
        console.log("enter valid firstname");
    }
}

const c=check({
    id:1,
    firstname:"siddhant",
    lastname:"sakhare",
    email:"sidd@gmail.com",
    age:28,
    ismarried:false,
    skills:["cpp","rust","golang"]
})

console.log(c);