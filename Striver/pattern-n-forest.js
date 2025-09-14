class Solution {
  // Function to print square of N
  printSquare(N) {
    console.log("---------------------- Pattern 1 ------------------------");
    
    for (let i = 0; i < N; i++) {
      let row = "";
      for (let j = 0; j < N; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }

  printTriangle(N) {
    console.log("---------------------- Pattern 2 ------------------------");

    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }

  printTriangleNumber(n) {
    console.log("---------------------- Pattern 3 ------------------------");
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += `${j} `;
      }
      console.log(row);
    }
  }

  printTriangleNumber2(n) {
    console.log("---------------------- Pattern 4 ------------------------");

    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += `${i} `;
      }
      console.log(row);
    }
  }

  printTriangleInverted(N) {
    console.log("---------------------- Pattern 5 ------------------------");

    for (let i = 1; i <= N; i++) {
      let row = "";
      for (let j = N; j >= i; j--) {
        row += `* `;
      }
      console.log(row);
    }
  }

  printTriangle2(N) {
    console.log("---------------------- Pattern 6 ------------------------");

    for (let i = 0; i < N; i++) {
      let row = "";
      for (let j = 1; j <= N - i; j++) {
        row += `${j} `;
      }
      console.log(row);
    }
  }

  printTriangleCenterUp(n) {
    console.log("---------------------- Pattern 7 ------------------------");

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
    console.log("---------------------- Pattern 8 ------------------------");

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

  printTriangleCenter(n) {
    console.log("---------------------- Pattern 9 ------------------------");

    // code here
    this.printTriangleCenterUp(n);
    this.printTriangleCenterDown(n);
  }

  printHalfTriangleCenter(n) {
    console.log("---------------------- Pattern 10 ------------------------");

    for (let i=0; i <= ((2 * n) - 1); i++) {
      let row = "";
      let stars = i;
      if (i > n) {
        stars = (2 * n) - i 
      } 
      
      row += '*'.repeat(stars);
      console.log(row);
    }
  }

  printTriangleOldEven(n) {
    console.log("---------------------- Pattern 11 ------------------------");
    
    for (let i = 0; i < n; i++) {
      let row = "";
      let num = 1;
      if (i % 2 === 0) {
        num = 1
      } else {
        num = 0;
      }

      for (let j = 0; j <= i; j++) {
        row += num;
        // num = num === 1 ? 0 : 1;
        num = 1 - num;
      } 
      
      console.log(row);
    }
  }

  // [1, 6, 1]
  // [2, 4, 2]
  // [3, 2, 3]
  // [4, 0, 4]
  printTriangleOutsideCenterDown(n) {
    console.log("---------------------- Pattern 12 ------------------------");

    // larger to smaller

    // for (let i = n; i >= 1; i--) {
    //   let row = "";
    //   // first tringle
    //   for (let j = 1; j <= (n - i) ; j++) {
    //     row += j;
    //   }
      
    //   // space between 2 tringle
    //   row += ' '.repeat(i + (i - 2))

    //   // second tringle
    //   for (let j = (n - i); j >= 1 ; j--) {
    //     row += j;
    //   }

    //   console.log(row);
    // }


    // Smaller to larger
    
    let space = 2 * (n- 1);
    for (let i = 1; i <= n; i++) {
      let row = "";
      // Numbers
      for (let j = 1; j <= i; j++) {
        row += j
      }

      // Spaces
      for (let j = 1; j <= space; j++) {
        row += " "
      }
      
      // Numbers
      for (let j = i; j >= 1; j--) {
        row += j
      }

      space -= 2;
      console.log(row);
    }
  }

  printTriangleContinues(n) {
    console.log("---------------------- Pattern 13 ------------------------");

    let num = 1;
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += num + " ";
        num++;
      }

      console.log(row);
    }
  }

  printTriangleAlphabets(n) {
    console.log("---------------------- Pattern 14 ------------------------");

    let char = 65; // ascii of 'A'
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(char + j) + " ";
      }

      console.log(row);
    }
  }

  printTriangleAlphabetsDown(n) {
    console.log("---------------------- Pattern 15 ------------------------");

    let char = 65; // ascii of 'A'
    for (let i = n; i > 0; i--) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += String.fromCharCode(char + j) + " ";
      }

      console.log(row);
    }
  }

  printTriangleAlphabets2(n) {
    console.log("---------------------- Pattern 16 ------------------------");

    let char = 65; // ascii of 'A'
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(char + i) + " ";
      }

      console.log(row);
    }
  }

  printTriangleAlphabetsCenter(n) {
    console.log("---------------------- Pattern 17 ------------------------");

    let char = 65; // ascii of 'A'

    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = i; j <= (n - 1) ; j++) {
        row += ` `;
      }

      const columnCount = i + (i - 1);
      for (let j = 1; j <= columnCount; j++) {
        if (j > i) {
          row += String.fromCharCode(char + (columnCount - j));
        } else {
          row += String.fromCharCode(char + j - 1);
        }
      }

      console.log(row);
    }
  }

  printTriangleAlphabetsDown2(n) {
    console.log("---------------------- Pattern 18 ------------------------");

    let char = 65 ; // ascii of 'A'
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = i; j >= 1; j--) {
        row += String.fromCharCode(char + (n - j)) + " ";
      }

      console.log(row);
    }
  }

  printTriangleAlphabetsDown2(n) {
    console.log("---------------------- Pattern 19 ------------------------");

    let intialSpace = 0;
    
    // Upper pattern  
    for (let i = 1; i <= n; i++) {
      let row = "";
      // star
      for (let j = 0; j <= n - i; j++) {
        row += "*";
      }

      // sapce
      for (let j = 0; j < intialSpace; j++) {
        row += " ";
      }
      
      // star
      for (let j = 0; j <= n - i; j++) {
        row += "*";
      }

      intialSpace += 2;

      console.log(row);
    }


    intialSpace -= 2; // As in upper loop for last iteration it is become + 2
    // Lower pattern  
    for (let i = 1; i <= n; i++) {
      let row = "";
      // star
      for (let j = 0; j < i; j++) {
        row += "*";
      }

      // sapce
      for (let j = 0; j < intialSpace; j++) {
        row += " ";
      }
      
      // star
      for (let j = 0; j < i; j++) {
        row += "*";
      }

      intialSpace -= 2;

      console.log(row);
    }
  }

  printTriangleAlphabetsDown3(n) {
    console.log("---------------------- Pattern 20 ------------------------");

    let spaceCount = (2 * n) - 2;
    for (let i = 1; i <= (2 * n) - 1; i++) {
      let row = "";

      // Star
      const starCount = i > n ? ((2 * n) - i) : i; 
      for (let j = 1; j <= starCount; j++) {
        row += "*";
      }

      // Space
      for (let j = 1; j <= spaceCount; j++) {
        row += " ";
      }

      // Star
      for (let j = 1; j <= starCount; j++) {
        row += "*";
      }

      if (i < n) {
        spaceCount -= 2;
      } else {
        spaceCount += 2;
      }

      console.log(row);
    }
  }

  printSquareBorder(n) {
    console.log("---------------------- Pattern 21 ------------------------");

    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n ) {
          row+= "*";
        } else {
          row+= " ";
        }
      }
      console.log(row);
    }
  }

  printSquareBorderWithgNumber(n) {
    console.log("---------------------- Pattern 22 ------------------------");
    /**
     * Below is the matrix which we need to identify as we need to minus that value for the n so that we can get proper expected output
     * so to find this methods we can see one pattern is 
     * for selected block from all the direct mininum distance is the value which we want 
     * 
     * ex. row = 3, colum = 2
     * top distance = 2 (blocks before selected one)
     * left distance = 1 (blocks before selected one)
     * bottom distance = 4 (blocks before selected one)
     * right distance = 5 (blocks before selected one)
     * 
     * from above value minimum distance is 1 (left) so that is the correct value for that block to minus from the n for output 
     * 
    [0, 0, 0, 0, 0, 0, 0]
    [0, 1, 1, 1, 1, 1, 0]
    [0, "1", 2, 2, 2, 1, 0]
    [0, 1, 2, 3, 2, 1, 0]
    [0, 1, 2, 2, 2, 1, 0]
    [0, 1, 1, 1, 1, 1, 0]
    [0, 0, 0, 0, 0, 0, 0]
     * 
     * 
     */

    for (let i = 0;  i < (2 * n) - 1; i++) {
      let row = "";
      for (let j = 0;  j < (2 * n) - 1; j++) { 
        const topDistance = i; // row => row distance form start to currnet selected block
        const leftDistance = j; // column => column distance form start to currnet selected block
        const rightDistance = ((2 * n) - 2) - j; // row distance form last to currnet selected block
        const downDistance = ((2 * n) - 2) - i; // column disatnce from bottom to currnet selected block

        const verticalMinDistance = Math.min(topDistance, downDistance);
        const horizonatalMinDistance = Math.min(leftDistance, rightDistance);
        const minDisanceFromAllSide = Math.min(verticalMinDistance, horizonatalMinDistance);
        // minDisanceFromAllSide this value will give us a number which we need to minus form the total n

        row += (n - minDisanceFromAllSide) + " ";
      }
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
solutionObj.printTriangleCenterUp(5);
solutionObj.printTriangleCenterDown(5);
solutionObj.printHalfTriangleCenter(5)
solutionObj.printTriangleOldEven(5);
solutionObj.printTriangleOutsideCenterDown(5);
solutionObj.printTriangleContinues(5);
solutionObj.printTriangleAlphabets(5);
solutionObj.printTriangleAlphabetsDown(5);
solutionObj.printTriangleAlphabets2(5);
solutionObj.printTriangleAlphabetsCenter(5);
solutionObj.printTriangleAlphabetsDown2(5);
solutionObj.printTriangleAlphabetsDown3(5);
solutionObj.printSquareBorder(5);
solutionObj.printSquareBorderWithgNumber(5);

const numberOfDigit = solutionObj.countDigit(1513264);
console.log("Number of digits in 1513264 ::" , numberOfDigit);
