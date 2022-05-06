let a = 230;

let b = a % 10;
let c = (a - b) / 10;
let d = c % 10;
let e = (c - d) / 10;

let add = b + d + e;
let mult = b * d * e;

console.log(add, mult);