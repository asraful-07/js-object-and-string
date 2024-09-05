const laptop ={
    brand: 'hp',
    price: '31000',
    processor: 'intel',
    ssd: '512gb',
}

// for of array
// for in object

// for(const prop in laptop){
//     console.log(prop)
//     console.log(laptop[prop]);
// }

const keys = Object.keys(laptop);
console.log(keys);

for (const prop of keys){
    // console.log(key.laptop, ':' [key]);
    console.log(prop)
    console.log(laptop[prop]);
}