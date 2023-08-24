const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

console.log(glass); 
// find out all the keys of glass
const keys = Object.keys(glass);

// all values 
const values = Object.values(glass);

// array of array 

const entries = Object.entries(glass);

// delete any keys from glass 

// delete glass.isCleaned;

// another way to delete 
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// freeze mane holo property or values kono kichu change hobe na  

// Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

// seal mane holo modify kora jabe

Object.seal(glass);
glass.madeOf = 'iron';
glass.price = 30;
console.log(glass)