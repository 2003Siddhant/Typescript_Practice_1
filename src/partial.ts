interface user{
    id:number,
    name:string,
    email:string,
}
function update(id:number, a:Partial<user>){
    console.log(`this user has ${id} `,a);
}

update(1,{id:1,name:"sidd"});
update(2,{id:2,name:"raj",email:"raj@gmail.com"});

interface person{
    id:number,
    name:string,
    age:number,
    password:string,
    salary:number
}

const check =(id:number,b:Partial<person>)=>{
    if(id>2){
        console.log(`this user  details `,b);
    }
    else{
        console.log(`this user  details `,b);
    }
}
check(1,{id:110,name:"ram",age:11});
check(1,{id:111,name:"shyam",age:12});
check(2,{id:222,name:"sidd",age:24,password:"sidd234",salary:250000});
check(2,{id:223,name:"shri",age:25,password:"shri934",salary:50000});