const preson = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  addres: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthday() {
    return 2019 - this.age;
  },
};

let val;

val = preson;

// Get specific value
val = preson.firstName;
val = preson['lastName'];
val = preson.age;
val = preson.hobbies;
val = preson.hobbies[0];
val = preson.addres.state;
val = preson.getBirthday();

console.log(val);

const people = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Mike',
    age: 26,
  },
];

people.map(({ name, age }) => console.log(`name: ${name}, age: ${age}`));
