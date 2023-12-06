
Promise.resolve(1)
  .then(
    (value) => console.log(value * 2),
    (value) => console.log(value * 3)
  )
  .then(() => { throw new Error('Oh No!'); })
  .catch((error) => 3)
  .finally(() => console.log(4))
  .then(console.log);
console.log(7);

/////////////////////////////////////////////////////////


console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => console.log(5));
});

Promise.resolve().then(() => console.log(6));

setTimeout(() => console.log(7));

console.log(8);

/////////////////////////////////////////////////////////

async function testAsync() {
  for (const username of ['nkgokul', 'BrendanEich', 'gaearon']) {
    let userDetails = await fetch('https://api.github.com/users/' + username);
    let userDetailsJSON = await userDetails.json();
    console.log(userDetailsJSON);
  }
}

testAsync();

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
