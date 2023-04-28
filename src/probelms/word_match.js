"use strict";

/*
After catching your classroom students cheating before, you realize your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
	['c', 'c', 'x', 't', 'i', 'b'],
	['c', 'c', 'a', 't', 'n', 'i'],
	['a', 'c', 'n', 'n', 't', 't'],
	['t', 'c', 's', 'i', 'p', 't'],
	['a', 'o', 'o', 'o', 'a', 'a'],
	['o', 'a', 'a', 'a', 'o', 'o'],
	['k', 'a', 'i', 'c', 'k', 'i'],
]
word1 = "catnip"
word2 = "cccc"
word3 = "s"
word4 = "bit"
word5 = "aoi"
word6 = "ki"
word7 = "aaa"
word8 = "ooo"

grid2 = [['a']]
word9 = "a"

find_word_location(grid1, word1) => [ (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]
find_word_location(grid1, word2) =>
       [(0, 1), (1, 1), (2, 1), (3, 1)]
    OR [(0, 0), (1, 0), (1, 1), (2, 1)]
    OR [(0, 0), (0, 1), (1, 1), (2, 1)]
    OR [(1, 0), (1, 1), (2, 1), (3, 1)]
find_word_location(grid1, word3) => [(3, 2)]
find_word_location(grid1, word4) => [(0, 5), (1, 5), (2, 5)]
find_word_location(grid1, word5) => [(4, 5), (5, 5), (6, 5)]
find_word_location(grid1, word6) => [(6, 4), (6, 5)]
find_word_location(grid1, word7) => [(5, 1), (5, 2), (5, 3)]
find_word_location(grid1, word8) => [(4, 1), (4, 2), (4, 3)]
find_word_location(grid2, word9) => [(0, 0)]

Complexity analysis variables:

r = number of rows
c = number of columns
w = length of the word
*/

const grid1 = [
	['c', 'c', 'x', 't', 'i', 'b'],
	['c', 'c', 'a', 't', 'n', 'i'],
	['a', 'c', 'n', 'n', 't', 't'],
	['t', 'c', 's', 'i', 'p', 't'],
	['a', 'o', 'o', 'o', 'a', 'a'],
	['o', 'a', 'a', 'a', 'o', 'o'],
	['k', 'a', 'i', 'c', 'k', 'i']
];
const word1 = "catnip";
const word2 = "cccc";
const word3 = "s";
const word4 = "bit";
const word5 = "aoi";
const word6 = "ki";
const word7 = "aaa";
const word8 = "ooo";

const grid2 = [['a']];
const word9 = "a";

function find_word_location(grid, word) {
  const wordArray = word.split('');
  let i = 0;
  let j = 0;


  let rowflag = true;
  let colflag = true;


for(let k = 0; i < wordArray.length; k++) {

  while( rowflag ) {
      while( colflag ) {
        if (wordArray[k] === grid[i][j]) {
          const rightChar = grid[i][j+1]
          const bottomChar = grid[i+1][j]

          if(rightChar === wordArray[k+1]) {
           // direction for next iteratin fwd
          }

          if(bottomChar === wordArray[k+1]) {
            // direction for next iteratin down
          }

        }
      }

    }
  }

}
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      console.log(grid[i][j])
    }
    console.log("-------")
  }
}

find_word_location(grid1, word1)

// function find_embedded_word(words, str) {
//   const strArray = str.split('').sort()

//   const frequencyMap = {};

//   for(const char of strArray) {
//     if(!frequencyMap[char]) {
//       frequencyMap[char] = 0;
//     }
//     frequencyMap[char] += 1;
//   }


//   for(const word of words) {
//     const orderedChars = word.split('').sort() // [a c t]
//     const wordFrequencyMap = {};

//     for(const char of orderedChars) {
//       if(!wordFrequencyMap[char]) {
//         wordFrequencyMap[char] = 0;
//       }
//       wordFrequencyMap[char] += 1;
//     }


//     const res = orderedChars.every((char) =>  {
//       return strArray.includes(char) && frequencyMap[char] >= wordFrequencyMap[char]
//     })
//     // console.log(orderedChars, res)

//     if(res) return word;
//   }

//   return null;
// }
