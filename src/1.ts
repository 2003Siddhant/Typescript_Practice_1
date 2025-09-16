// let a:number =10;
// console.log(a)

function greet(name:string){
    console.log(`hello ,${name}`);
}
greet("siddhant");

function add(a:number,c:number){
    console.log(a+c);
}
add(4,124);

function check(age:number){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(11));

let arr:string[]=["siddhant","rahul","rohit"];
console.log(arr);

function delayed(fn:()=>void){
    setTimeout(fn,1000);
}
delayed(()=>{
    console.log("hllo baby");
})