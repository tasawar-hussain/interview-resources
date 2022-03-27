'4' * '6' + '9' - '5';

// pass by value , pass by referencecon
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

const f = () => this;
console.log(f()); // true
console.log(f() === window); // true

const obj = {
  foo: function () {
    const baz = () => this;
    return baz();
  },
  bar: () => this,
};

console.log(obj.bar());
console.log(obj.foo());
// { foo, bar }

console.log(obj.bar() === window); // true

// Event handler context

const el = document.getElementById('my-el');

el.addEventListener('click', function () {
  console.log(this === el); // true
});

// “this” Refers to an Invoker Object (Parent Object)
function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this);
  },
  foo2: () => {
    console.log(this);
  },
};

user.foo(); // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1;
fun1(); // Prints true as this method is invoked as a simple function.
user.foo1(); // Prints false on console as foo1 is invoked as a object’s method

///////////////////////////////////////

let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

// *************************************** //

const x = () => {
  new Promise((resolve) => {
    console.log('A');
    resolve();
  }).then(() => console.log('B'));
  console.log('C');
};

x();

const y = async () => {
  await new Promise((resolve) => {
    console.log('A');
    resolve();
  })
    .then(() => console.log('C'))
    .then(() => console.log('D'));
  console.log('B');
};

y();

const str1 = 'abc';
const str2 = new String('abc');
console.log(typeof str1); //String

console.log(str.toUpperCase());

const line = {
  x: 376,
  y: 226,
};

function printLine() {
  return () => {
    console.log(this.x);
  };
}

let myPrint = printLine().bind(line);
myPrint();
