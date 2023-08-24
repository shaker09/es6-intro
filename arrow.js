// function declaration
// function add(a,b){
//     const sum = a + b;
//     return sum;
// }
function add(a,b){
    return a + b;
}

// function expression 
const add2 = function(a,b){
    return a + b;
}

// arrow function
const add3 = (a,b) => a+b;
const addition = (num1,num2,num3,num4) => num1 + num2 + num3 + num4;
const math = addition(4,34,5,8);
console.log(math)