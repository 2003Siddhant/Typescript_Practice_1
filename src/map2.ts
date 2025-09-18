interface user{
    id:number,
    name:string,
    price:number,
}
const product=new Map<number,user>();

product.set(100,{id:1,name:"book",price:100})
product.set(102,{id:2,name:"pencil",price:20})

console.log(product.get(100)?.name)
console.log(`name of the product with this id is ${product.get(102)?.name}`)
console.log(`price of the product with this id is ${product.get(102)?.price}`)
console.log(`id of the product with this id is ${product.get(100)?.id}`)