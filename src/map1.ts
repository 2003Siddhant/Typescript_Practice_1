const users=new Map<number,string>()

users.set(1,"sidd");
users.set(2,"shri");
users.set(3,"ram");
users.set(4,"raj");

users.get(3);

users.forEach((value,key)=>{
    console.log(`id:${value} and Name:${key}`)
})