let colors = [
  ['a', 'b', 'a', 'a', 'c', 'd'],
  ['a', 'a', 'a', 'a', 'c', 'd'],
  ['a', 'b', 'a', 'd', 'd', 'e'],
  ['b', 'b', 'a', 'a', 'f', 'f'],
  ['c', 'b', 'c', 'c', 'e', 'd'],
  ['c', 'b', 'a', 'a', 'c', 'd'],
];

colors = [
  ['Z', 'A', 'A', 'A', 'X'],
  ['Z', 'Z', 'A', 'A', 'X'],
  ['M', 'M', 'M', 'M', 'A'],
  ['Z', 'Y', 'Z', 'M', 'C'],
  ['M', 'M', 'M', 'M', 'D'],
];

const checked = new Set();
const toBeChecked = new Set();
toBeChecked.add(`${0}:${0}`);
let count = 0;

const toStr = (i, j) => `${i}:${j}`;

while (toBeChecked.size > 0) {
  const val = [...toBeChecked].pop();

  toBeChecked.delete(val);

  if (checked.has(val)) {
    continue;
  }

  let [i, j] = val.split(':');
  i = +i;
  j = +j;

  const neighbors = [[i, j]];

  while (neighbors.length > 0) {
    const [i, j] = neighbors.at(-1);
    neighbors.pop();

    const current = colors[i]?.[j];
    checked.add(toStr(i, j));

    const right = colors[i + 1]?.[j];
    if (right && !checked.has(toStr(i + 1, j))) {
      right === current ? neighbors.push([i + 1, j]) : toBeChecked.add(toStr(i + 1, j));
    }

    const left = colors[i - 1]?.[j];
    if (left && !checked.has(toStr(i - 1, j))) {
      left === current ? neighbors.push([i - 1, j]) : toBeChecked.add(toStr(i - 1, j));
    }

    const up = colors[i]?.[j - 1];
    if (up && !checked.has(toStr(i, j - 1))) {
      up === current ? neighbors.push([i, j - 1]) : toBeChecked.add(toStr(i, j - 1));
    }

    const down = colors[i]?.[j + 1];
    if (down && !checked.has(toStr(i, j + 1))) {
      down === current ? neighbors.push([i, j + 1]) : toBeChecked.add(toStr(i, j + 1));
    }
  }
  count += 1;
}

console.log(count);
