interface Person{
    id:number,
    name:string,
    getdetails():string,
}
class Employee implements Person{
    constructor(
        public id:number,
        public name:string,
        private role:string,
    ){}
    getdetails():string{
        return `ID: ${this.id}, Name: ${this.name}, Role: ${this.role}`;
    }
}
const em=new Employee(1,"sidd","developer");
console.log(em.getdetails());
