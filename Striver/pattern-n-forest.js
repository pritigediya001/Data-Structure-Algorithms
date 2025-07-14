class Solution {
  // Function to print square of N
  printSquare(N) {
    for (let i = 0; i < N; i++) {
      let row = "";
      for (let j = 0; j < N; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }

  printTriangle(N) {
    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }

  printTriangleNumber(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += `${j} `;
      }
      console.log(row);
    }
  }

  printTriangleNumber2(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += `${i} `;
      }
      console.log(row);
    }
  }

  printTriangleInverted(N) {
    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = N; j >= i; j--) {
        row += `* `;
      }
      console.log(row);
    }
  }

  printTriangle2(N) {
    for (let i = 0; i < N; i++) {
      let row = "";
      for (let j = 1; j <= N - i; j++) {
        row += `${j} `;
      }
      console.log(row);
    }
  }

  printTriangleCenter(n) {
    // code here
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = i; j <= (n - 1) ; j++) {
        row += ` `;
      }
      row += '*'.repeat(i + (i - 1))
      console.log(row);
    }
  }

  printTriangleCenterDown(n) {
    // code here
    for (let i = n; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= (n - i) ; j++) {
        row += ` `;
      }
      row += '*'.repeat(i + (i - 1))
      console.log(row);
    }
  }

  countDigit(n) {
    let num = n;
    let count = 0;
    
    do {
      num = parseInt(num / 10);
      count++;
    } while (num > 0);
    
    return count;
  }
}

const solutionObj = new Solution();
solutionObj.printSquare(5);
solutionObj.printTriangle(5);
solutionObj.printTriangleNumber(5);
solutionObj.printTriangleNumber2(5);
solutionObj.printTriangleInverted(5);
solutionObj.printTriangle2(5);
solutionObj.printTriangleCenter(5);
solutionObj.printTriangleCenterDown(5);

const numberOfDigit = solutionObj.countDigit(1513264);
console.log("Number of digits in 1513264 ::" , numberOfDigit);
