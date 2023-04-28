
// Hoisting

// **************************************** //
foo();

console.log(b)

function foo() {
  let a = b = 0;
  a++;
  b++;
  return a;
}

// *************************************** //
console.log(y);
y = 1;
// -------------------
console.log(y);
var y = 2;
// -------------------
y = 3;
console.log(y);
var y;
// --------------------

// *************************************** //
function test() {
  console.log("Value of a in local scope: ", a);
}

a = 6;
console.log("Value of a in global scope: ", a);
var a = 1;

test();

// ***********************************************
my_number = 5
var sqrt=(function(x) {
    console.log(x*x);
})(my_number)

var my_number;

// *************************************** //
function a(){
  console.log("1")
}

a();

function a(){
  console.log("2")
}

a();

function a() {
  var b = () => {
    console.log("3");
  }
  return b();
  function b() {
    console.log("4");
  }
}
a();
// *************************************** //

function test(arr=[1,3,5,7]){
  let i;
  for (i = 0; i < arr.length; i++) {
    const log = () => {
      console.log(arr[i])
    }
    setTimeout(log, 100);
  }
}

test();
// ****************************************** //





function test() {
  console.log(myVar);
}

myVar = 7;

console.log(myVar);

var myVar = 3;

test();


console.log(a);
console.log(b);
console.log(c);

var b = 'b';

function a() {
  console.log('a');
}

var c = function c() {
  console.log('c');
};
