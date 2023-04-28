const ranges = [[8, 12], [1, 4], [2, 6], [1, 3], [5, 10], [7, 8], [7, 9]];
const sortedRanges = [[1, 4], [1, 3], [2, 6], [5, 10], [7, 8], [7, 9], [8, 12]]


// ********************************************************************


const unordered = [66, 1, 2, 3, 11, 31, 12, 42, 55, 74, 200]
  // Ordered: [a<b>c<d>e<f>g]

const res =   [1, 66, 2, 11, 3, 31, 12, 55, 42, 200, 74];




const swap = (i, j) => {
  let temp = unordered[i];
  unordered[i] = unordered[j]
  unordered[j] = temp
}

let lessThan = true
for (let i = 0; i < unordered.length - 1; i++) {
  if (lessThan) {
    if (unordered[i] > unordered[i + 1]) {
      swap(i, i + 1)
    }
  } else {
    if (unordered[i] < unordered[i + 1]) {
      swap(i, i + 1)
    }
  }
  lessThan = !lessThan
}
