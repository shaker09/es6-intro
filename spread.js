const max = Math.max(3,5,7,8,90,45,23,456,789,34);
console.log(max);

// const numbers = [3,4,5,778,34,5677,90765];
// const arrayMax = Math.max(numbers);
// console.log(arrayMax);
// output dekhabe NaN. karon ei khane sonkha/numbers k code pacche as array tai max number ber korte parche na but spread(...) deye easily ber kora jai
const numbers = [3,4,5,778,34,5677,90765];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// spread operator copy 

// const friends = [1,3,4,7,45]
// const dosto = friends;
// dosto.push(100);
// console.log(friends)
// console.log(dosto);

// 100 push korechi shudumatro dosto er moddah kintu 100 dosto te push hoy abar friends er moddeo hocche. karon jokhon amra friends k copy kori tokhon friends er reference soho copy kori and dosto oi reference k always carry kore 

const friends = [1,3,4,7,45]
const dosto = [...friends];
dosto.push(100);
console.log(friends)
console.log(dosto);

