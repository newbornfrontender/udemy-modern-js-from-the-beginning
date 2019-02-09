let id = 100;

// ----------------------------------------

// Equal to
// if (id == 100) console.log('CORRECT');
// else console.log('INCORRECT');

// Not equal to
// if (id != 101) console.log('CORRECT');
// else console.log('INCORRECT');

// Equal to value and type
// if (id === 100) console.log('CORRECT');
// else console.log('INCORRECT');

// Not equal to value and type
// if (id !== 100) console.log('CORRECT');
// else console.log('INCORRECT');

// ----------------------------------------

// Test if undefined
// if (typeof id !== 'undefined') console.log(`The ID is: ${id}`);
// else console.log('No ID');

// ----------------------------------------

// id = 201;

// Greater or less than
// if (id <= 100) console.log('Correct');
// else console.log('Incorrect');

// ----------------------------------------

// If else
// const color = 'blue';

// const log = (color) => console.log(`Color is ${color}`);

// if (color === 'red') log('red');
// else if (color === 'blue') log('blue');
// else log('not red or blue');

// ----------------------------------------

// Logical operators
// const name = 'Stave';
// const age = 65;

// And (&&)
// if (age > 0 && age < 12) console.log(`${name} is a child`);
// else if (age >= 13 && age <= 19) console.log(`${name} is a teenager`);
// else console.log(`${name} is an adult`);

// Or (||)
// if (age < 16 || age > 65) console.log(`${name} can not run in race`);
// else console.log(`${name} is registered for race`);

// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// ----------------------------------------

// Without braces
if (id === 100) console.log('Correct');
else console.log('Incorrect');
