interface vehicle{
    brand:string,
    drive():string,
}
class car implements vehicle{
    constructor(
        public brand:string,
        
    ){}
    drive(): string {
        return `it is a ${this.brand} brand car`
    }
}
class bike implements vehicle{
    constructor(
        public brand:string
    ){}
    drive ():string{
        return `it is a ${this.brand} brand bike `
    }
}
const a=new car("tesla");
const b=new bike("suzuki");
console.log(a.drive())
console.log(b.drive())
