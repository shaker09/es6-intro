// function add(num1, num2){
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// default code is here now 
// now the output will show as 4 0 4
function add(num1, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum =add(5,9); 
// it will show me 5 9 14 as output
const sum = add(4);
// it will show up as 4 undefined NaN, cause we didn't mention num2 value.
// const sum =add();
// output is undefined undefined NaN, cause we didn't add any value here. 