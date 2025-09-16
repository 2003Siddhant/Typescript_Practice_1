interface car{
    brand:string,
    model:string,
    year:number,
    fuel:"Petrol" | "Diesel" | "Electric"
}

function validate(c:car){
    if(c.year<2000){
        console.log("car is too old");
        return false;
    }
    if(c.fuel==="Petrol" || c.fuel==="Diesel"){
        console.log(`${c.model} runs on ${c.fuel}`);
    }
    else{
        console.log(`${c.model} is an ${c.fuel} type car`);
    }
    return true;
}

console.log(validate({
    brand:"BMW",
    model:"X9",
    year:2025,
    fuel:"Electric"
}))