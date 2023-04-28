const execuationTimes = [3, 2, 1, 2, 6];

// waiting time of each task
// 3 -> 0
// 2 -> 0 + 3 = 3
// 1 -> 0 + 3 + 2 = 5
// 2 -> 0 + 3 + 2 + 1 = 6
// 6 -> 0 + 3 + 2 + 1 + 2 = 8

//  totalWaitingTime = 0 + 3 + 5 + 6 + 8 = 22

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);

  let total = 0;

  for (let i = 0; i < queries.length; i++) {
    const itemsLeft = queries.length - i - 1;
    total += itemsLeft * queries[i];
  }

  return total;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
