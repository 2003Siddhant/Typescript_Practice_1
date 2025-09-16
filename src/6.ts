interface manager{
    name:string,
    age:number,
}

interface employee{
    name:string,
    department:string,
}

type teamlead=manager & employee;

let tl:teamlead={
    name:"sidd",
    age:55,
    department:"consulting",
}

console.log(tl);