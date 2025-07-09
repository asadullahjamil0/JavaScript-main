// const { Add,Sub } = require("./library.js");
import lib from "./Maths/library.js";
const { Sub, Add, obj } = lib;

const a = 32;
const b = 65;

console.log(a + b);
console.log(Add(34, 12));
console.log(Sub(10, 5));
console.log(obj.name);
console.log(obj.DateOfBirth);
console.log(obj.divide(10, 5));
