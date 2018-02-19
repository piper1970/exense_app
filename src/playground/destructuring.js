console.log('destructuring...');

// Object Destructuring...
// const person = {
//     name:'Steve',
//     age: 46,
//     location: {
//         city: 'Beaverton',
//         temp: 'snowy'
//     }
// };

// const {name, age} = person;
// console.log(`${name} is ${age}`);

// const {temp:temperature='sunny', city} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const Book = {
//     title: 'It',
//     author: 'Stephen King',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = (Book.publisher?Book.publisher:{});
// console.log(publisherName);

// Array Destructuring
const address = [
    '123 SW Fourth Ave',
    'Whatsupoo',
    'Wherever',
    '00001'
];

const [,city, state] = address;

console.log(`Your are in ${city}, ${state}`);

const item = [
    'Espesso',
    1.75,
    2.50,
    3.75
];

const [name,,medPrice] = item;
console.log(`A medium ${name} costs $${medPrice.toFixed(2)}`);