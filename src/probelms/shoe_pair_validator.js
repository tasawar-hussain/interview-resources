https://www.programiz.com/javascript/online-compiler/

const shoesData= [
  [1, 3],
  [0, 5],
  [1, 5],
  [0, 3],
  [1, 8],
  [1, 5],
  [0, 5],
  [0, 8],
  [1, 4],
  [0, 4],
];


const map = {};

shoesData.forEach(([rightLeft, size]) => {
  map[size] = map[size] || 0
  rightLeft ? map[size]++ : map[size]--
})

console.log(map)
