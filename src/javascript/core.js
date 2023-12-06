// pass by value , pass by reference

const test = (a, b, c, d) => {
  a += 10;
  b = 15;
  c.name = 'Tom';
  d = { name: 'Bill' };
  console.log(a, b, c.name, d.name);
};

var aa = 1;
var bb = 2;
var cc = { name: 'James' };
var dd = { name: 'Nick' };

test(aa, bb, cc, dd);

console.log(aa, bb, cc.name, dd.name);
// *************************************** //

const obj1 = { name: 'ali' };
const obj2 = { name: 'ali' };

obj1 == obj2;
obj1 === obj2;

const a = 10;
const b = 20;

// *************************************** //

let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

// *************************************** //

const str1 = 'abc';
const str2 = new String('abc');
console.log(typeof str1); //String

console.log(str.toUpperCase());
