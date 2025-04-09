const checkMatrixIsValid = (m1, m2) => {
  if (!m1?.length || !m2?.length) return false;

  const m1TotalColumn = m1?.[0]?.length;
  const m2TotalRow = m2?.length;
  if (m1TotalColumn !== m2TotalRow) {
    return false;
  }

  const isAllRowHasSameColumn1 = m1?.every(
    (totallen, ele) => totallen !== ele.length,
    m1?.[0]?.length
  );
  if (!isAllRowHasSameColumn1) {
    return false;
  }

  const isAllRowHasSameColumn2 = m2?.every(
    (totallen, ele) => totallen !== ele.length,
    m2?.[0]?.length
  );
  if (!isAllRowHasSameColumn2) {
    return false;
  }

  return m1?.[0]?.length === m2?.length;
};

const multiplyMatrices = (matrixA, matrixB) => {
  if (!checkMatrixIsValid(matrixA, matrixB)) {
    throw new Error("Matrix multiplication is not possible");
  }

  const m1TotalRow = matrixA?.length;
  const m1TotalColumn = matrixA?.[0]?.length;
  const m2TotalColumn = matrixB?.[0]?.length;

  const result = [];
  for (let row = 0; row < m1TotalRow; row++) {
    result[row] = [];
    for (let column = 0; column < m2TotalColumn; column++) {
      result[row][column] = 0;
      for (let k = 0; k < m1TotalColumn; k++) {
        result[row][column] += matrixA[row][k] * matrixB[k][column];
      }
    }
  }

  return result;
};

const m1 = [
  [1, 2, 3],
  [4, 5, 6],
];

const m2 = [
  [6, 5, 6],
  [4, 3, 5],
  [2, 1, 8],
];

const m3 = [
  [1, 2, 3], // Row 0
  [4, 5, 6], // Row 1
  [7, 8, 9], // Row 2
  [10, 11, 12], // Row 3
  [13, 14, 15], // Row 4
  [16, 17, 18], // Row 5
];

const m4 = [
  [1, 2], // Col 0: [1, 3, 5]
  [3, 4],
  [5, 6],
];

console.log(
  "Matrix Multiplication :: ",
  JSON.stringify(multiplyMatrices(m1, m2))
);

console.log(
  "Matrix Multiplication 2 :: ",
  JSON.stringify(multiplyMatrices(m3, m4))
);
