interface item {
    name:string
    price:number
}
//Create two objects

const book: item = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 550,
}

const apples: item = {
    name: "apple",
    price: 200,
}

console.log(`bookname: ${book.name}, \nprice: ${book.price}`)

console.log(`applename: ${apples.name}, \nprice: ${apples.price}`)

