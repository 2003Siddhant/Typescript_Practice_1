interface animal{
    name:string,
    makesound():string,
}
interface pet extends animal{
    play():string,
}
class cat implements pet{

    name:string
    constructor(name:string){
        this.name=name
    }

    makesound(): string {
        return`${this.name} has a sound meow.. meow..`
    }

    play():string{
        return `${this.name} is playing cricket`;
    }
}

const a=new cat("sydney")
console.log(a.makesound())
console.log(a.play())