let a = 765;
let x = Math.floor(a % 10 * 100);
let y = Math.floor(a % 100 - a % 10);
let z = Math.floor(a / 100);
let w = x + y + z;

console.log(w);



