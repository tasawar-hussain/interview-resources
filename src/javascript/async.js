let startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

async function testAsync() {
  for (username of ["nkgokul", "BrendanEich", "gaearon"]) {
    let userDetails = await fetch("https://api.github.com/users/" + username);
    let userDetailsJSON = await userDetails.json();
    userDetailsJSON;
  }
}

testAsync();

/////////////////////////////////////////////////////////////////////

function fibonacci(num) {
  if(num < 2) {
    return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(14))


////////////////////////////////////////////

const x = async () => {
  await new Promise(resolve => {
    console.log('A');
    resolve();
  }).then(() => console.log('B'));
  console.log('C');
}

x();

const y = () => {
  (
    new Promise(resolve => {
    console.log('A');
    resolve();
  }
  ).then(() => console.log('B')));
  console.log('C');
}

y();

/////////////////


function getBase64(file, success_cb, failure_cb) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(success_cb(cb(reader.result)));
  };
  reader.onerror = function (error) {
    console.log('Error: ', failure_cb(error));
  };
}
