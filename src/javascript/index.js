for (let i = 0; i < unordered.length - 1; i++) {
  if (lessThan) {
    if (unordered[i] > unordered[i + 1]) {
      swap(i, i + 1);
    }
  } else {
    if (unordered[i] < unordered[i + 1]) {
      swap(i, i + 1);
    }
  }
  lessThan = !lessThan;
}

// Unordered:[66, 1, 2,  3, 11, 31, 12, 42, 55, 74, 200]
// Ordered:[a<b>c<d>e<f>g]

//stackblitz.com/edit/js-ubfwfl?devtoolsheight=33&file=index.js

travel_history = {
  John: ['PAK', 'USA', 'MEX'],
  Mark: ['UAE', 'UK', 'DEN', 'USA'],
  Rite: ['PAK', 'KSA', 'PAK', 'MEX', 'USA'],
  Jess: ['PAK', 'UAE', 'IND'],
};

// IDictionary<string, string[]> numberNames = new Dictionary<string, string[]>(){
//   {"John", new string[] {"PAK", "USA", "MEX"}},
//   {"Mark", new string[] {"UAE","UK", "DEN", "USA"}},
//   {"Rite", new string[] {"PAK", "KSA", "PAK", "MEX", "USA"}},
//   {"Jess", new string[] {"PAK", "UAE", "IND"}},
// };

// new Hashtable() {
//   {"John", new string[] {"PAK", "USA", "MEX"}},
//   {"Mark", new string[] {"UAE","UK", "DEN", "USA"}},
//   {"Rite", new string[] {"PAK", "KSA", "PAK", "MEX", "USA"}},
//   {"Jess", new string[] {"PAK", "UAE", "IND"}},
// }
