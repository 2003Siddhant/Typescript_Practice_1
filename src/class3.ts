interface area{
    length:number,
    width:number,
    getarea():number,
}
class sqquare implements area{
    constructor(
        public length:number,
        public width:number
    ){}

    getarea():number{
        return this.length*this.width;
    }
}
class rectangle implements area{
    constructor(
        public length:number,
        public width:number,
    ){}

    getarea(): number {
        return 2*(this.length + this.width);
    }
}

const a=new sqquare(4,4);
const b=new rectangle(4,5);
console.log(a.getarea());
console.log(b.getarea());