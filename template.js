const first = 'Jann';
const last = 'Pakhi';
const greet = 'potas potas';
const fullName = first + ' ' + last + " " + greet;
console.log(fullName);

const a =10;
const b = 20;
const sum = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(sum);

// Its okay but we can do it better and more efficiently by using backtick (`). 

const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math);