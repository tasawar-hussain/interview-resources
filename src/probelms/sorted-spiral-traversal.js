const data = [
  [11, 7, 5, 9, 2],
  [6, 22, 26, 20, 12],
  [4, 25, 45, 24, 19],
  [18, 28, 21, 23, 17],
  [10, 1, 15, 13, 3],
];

function solution(matrix = data) {
  let topLeft = 0,
    topRight = matrix.length;
  let bottomLeft = -1,
    bottomRight = matrix.length;

  let i = 0,
    j = 0;

  const bordersMatrix = [];
  let border;

  for (let n = 0; n < Math.ceil(matrix.length / 2); n++) {
    border = [];

    // traverse left to right
    while (j < topRight) {
      border.push(matrix[i][j]);
      j++;
    }

    // traverse top to bottom
    j--;
    i++;
    while (i < bottomRight) {
      border.push(matrix[i][j]);
      i++;
    }

    // traverse right to left
    j--;
    i--;
    while (j > bottomLeft) {
      border.push(matrix[i][j]);
      j--;
    }

    // traverse bottom to up
    j++;
    i--;
    while (i > topLeft) {
      border.push(matrix[i][j]);
      i--;
    }

    topRight--;
    bottomRight--;
    bottomLeft++;
    topLeft++;

    j += 1;
    i += 1;

    console.log(border);

    border.sort((a, b) => a - b);
    bordersMatrix.push(border);
  }

  updateMatrix(matrix, bordersMatrix);

  console.log(matrix);
}

function updateMatrix(matrix, newMatrix) {
  let topLeft = 0,
    topRight = matrix.length;
  let bottomLeft = -1,
    bottomRight = matrix.length;

  let i = 0,
    j = 0;

  for (let n = 0; n < Math.ceil(matrix.length / 2); n++) {
    const bordersMatrix = newMatrix[n];
    // traverse left to right
    while (j < topRight) {
      matrix[i][j] = bordersMatrix.shift();
      j++;
    }

    // traverse top to bottom
    j--;
    i++;
    while (i < bottomRight) {
      matrix[i][j] = bordersMatrix.shift();
      i++;
    }

    // traverse right to left
    j--;
    i--;
    while (j > bottomLeft) {
      matrix[i][j] = bordersMatrix.shift();
      j--;
    }

    // traverse bottom to up
    j++;
    i--;
    while (i > topLeft) {
      matrix[i][j] = bordersMatrix.shift();
      i--;
    }

    topRight--;
    bottomRight--;
    bottomLeft++;
    topLeft++;

    j += 1;
    i += 1;
  }
}

solution(data);
