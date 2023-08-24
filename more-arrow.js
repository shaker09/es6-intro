const difference = (x , y) => x - y;
const multiply = (x , y , z) => x * y * z;

// single parameter or one parameter 
const getAge = (person) => person.age;
const student = {name : 'arif', age: 22};
const age =getAge(student);
console.log(age);
// in single parameter or one parameter we can use () or not
const getThird = numbers => numbers[2];
const third = getThird([3,5,7,8,4]);
console.log(third);

// no parameter 

const getPi = () => Math.PI;
console.log(getPi());

// large arrow function
// if you want to get anything return from this function then you have to use return keyword
const doMath = (x,y,z) =>{
    const sum = x + y + z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}
const finalMath = doMath(3,5,7);
console.log(finalMath);