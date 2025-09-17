type person={
    id:number,
    name:string,
    age:number
}

const a:person={id:1,name:"ram",age:35};
const b:person={id:2,name:"shyam",age:45};

// console.log(a);
// console.log(b);

type stud={name:string}
type emp={salary:number}

type z=stud & emp

const s:z={name:"harry",salary:90000};
console.log(s);
