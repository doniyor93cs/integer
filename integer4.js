let a = 123;
let x = Math.floor(a % 100 - a % 10)*10;
let y = Math.floor(a / 100)*10;
let z = Math.floor(a % 10);
let w = x + y + z;

console.log(w);