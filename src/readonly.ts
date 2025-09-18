interface config{
    api:string,
    timeout:number,
    endpoint:string,
}
const settings:Readonly<config> ={
    api:"openai.com",
    timeout:2000,
    endpoint:"/bc/cf.dsf"
}

console.log(settings);