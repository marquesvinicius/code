// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
// const firstNames = fullNames.map(function (firstName) {
//     return firstName.first;
// })

const firstNames = fullNames.map((firstName) => {
    return firstName.first;
})

const lastNames = fullNames.map(lastName => 
    `${lastName.last};`
)

console.log(firstNames);
console.log(lastNames);