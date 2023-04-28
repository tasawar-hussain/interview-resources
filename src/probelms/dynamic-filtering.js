// https://www.mycompiler.io/

const items = [
  { color: 'red', category: 'tv', price: 18, size: 'small' },
  { color: 'silver', category: 'phone', price: 20 },
  { color: 'blue', category: 'phone', price: 20, size: 'medium' },
  { color: 'green', category: 'phone', price: 20 },
  { color: 'silver', category: 'tv', price: 10, size: 'medium' },
];

const excludes = [
  { key: 'color', value: 'silver' },
  { key: 'category', value: 'tv' },
];

// output
const result = [
  { color: 'blue', category: 'phone', age: 20, size: 'medium' },
  { color: 'green', category: 'phone', age: 20 },
];

////////////////////////////////////////////////////

let newItems = items.filter(
  (item) => !excludes.some((exclude) => item[exclude['key']] === exclude['value'])
);

console.log(newItems);

document.querySelectorAll('[data-purpose="progress-toggle-button"]').forEach((y) => {
  window.setTimeout(() => {
    y.click();
  }, 10);
});
