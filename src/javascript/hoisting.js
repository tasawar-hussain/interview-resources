
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
      console.log(arr[i] + i);
    }
    setTimeout(log, 100);
  }
}

test();
// ****************************************** //


// ****************************************** //
function foo(arr=[3,5,7,8,9]) {
  var result = []
  let i;
  for (i = 0; i < 3; i++) {
    result.push(function bar() { console.log(arr[i]) } )
  }
  return result
}

const result = foo()

for (var i = 0; i < 3; i++) {
  result[i]()
}
// ****************************************** //


function test() {
  console.log(myVar);
}

myVar = 7;

console.log(myVar);

var myVar = 3;

test();

/////////////////////////////////////////////////////
{
  /* <ol class="list-group">
    <li>Default value</li>
    <li>Default value</li>
    <li>Default value</li>
    <li>Default value</li>
    <li>Default value</li>
    <li>Default value</li>
  </ol>
    <script>
    var li = document.querySelectorAll('.list-group > li');
    for (var i = 0, len = li.length; i < len; i++) {
       li[i].addEventListener('click', function (e) {
         e.target.innerHTML = `Item # ${i} is clicked`;
       })
}
    </script>  */
}
