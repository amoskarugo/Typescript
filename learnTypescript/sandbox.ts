let character = 'mario';
let age = 40;
let isBlackbelt = true;

// character = 20;
character = 'luigi';

// age = 'seven'
age = 50;

// isBlackbelt = 'yes'
isBlackbelt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(circ('hello')) while type is not declared the code will compile to normal js code
// with type declared the correct type reference is passed else of the wrong type is provided ts file won't even compile

//arrays

let names = ['ken', 'ian', 'kelvin'];
// names = 'hello'// cannot change the type of name

// names.push(3)// will error since array was declared with type
// names.push('james')//runs without error since the array is of type string
let numbers = [1, 3, 6, 7, 0, 6, 9];
// numbers.push('ss')//same case as the above

let mixed = ['monday', [7], 7, true];

mixed.push('tuesday');
mixed.push(false);
mixed.push(7);
//no error since mixed array accepts multiple types

//objects
let user = {
  name: 'mario',
  age: 40,
  isBlackbelt: false,
};

// user.name = 50//error sinces object property types works similarly as variable types

// user.skills = ['fighting', 'grappling'] once we define an object we cannot add additional properties to it

user = {
  name: 'yoshi',
  isBlackbelt: true,
  age: 20,
};

//it is not possible to re-declare the object with another type but you can re-assign an object which must match the original structure
