const firstName = 'William';
const lastName = 'Johnson';
const age = 37;
const str = 'Hello there my name is Brad';
const tags = 'web development, web design, programming';

let val;

// Append
val = 'Brad';
val += ' Traversy';

// Concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(', ');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');

console.log(val);
