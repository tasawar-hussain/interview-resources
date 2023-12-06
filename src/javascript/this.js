window.name = 'Paul';
function Person(name) {
  this.name = name;

  return {
    name: 'Mary',
    sayHello: () => {
      console.log(`Hello ${this.name}`);
    },
    sayBye: function () {
      console.log(`Bye ${this.name}`);
    },
  };
}
const person = new Person('John');
person.sayHello();
person.sayBye();

//////////////////////////////////////////////////////////////////

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
