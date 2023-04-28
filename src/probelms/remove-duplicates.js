function removeDuplicates(str) {
  if (str === null) return;
  str = str.split('');

  let len = str.length;
  if (len < 2) return;

  let tail = 1;

  for (let i = 1; i < len; ++i) {
    let j;
    for (j = 0; j < tail; ++j) {
      if (str[i] == str[j]) break;
    }

    if (j == tail) {
      str[tail] = str[i];
      ++tail;
    }
  }

  str.slice(0, tail);
  console.log('hello', str.join(''));
  return str;
}

console.log(removeDuplicates('axaxacxaaaz'));
