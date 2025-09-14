/**
 * @param {number} n
 * @returns {number} 
 */
class Solution {
    // Logic: 1*2*3*4......*n = n!
    factorialNumber(n) {
        if (n < 0 || n < 1) {
            return 1; 
        }

        let factorial = 1;
        // UISNG WHILE LOOP
        // while(n > 0) {
        //     factorial *= n;
        //     n = n - 1;
        // }

        // UISNG FOR LOOP
        for (let i = 2; i <= n; i++) {
            factorial = factorial * i;
        }
        // Time Complexity is O(n); 

        return factorial;
    }

    // USING Recursive solution 
    factorialUsingRecursive(n) {
        // Time Complexity = O(n);
        // Space Complexity = O(n); (auxilaryspace)

        // T(n) = T(n-1) + C (O(1))

        if (n === 0) {
            return 1;
        }

        return n * this.factorialUsingRecursive(n - 1)
    }
}


const solutionObj = new Solution();
console.log("Palindrome Number Function : 0 : ", solutionObj.factorialNumber(0));
console.log("Palindrome Number Function : 1 : ", solutionObj.factorialNumber(1));
console.log("Palindrome Number Function : 2 : ", solutionObj.factorialNumber(2));
console.log("Palindrome Number Function : 3 : ", solutionObj.factorialNumber(3));
console.log("Palindrome Number Function : 4 : ", solutionObj.factorialNumber(4));
console.log("Palindrome Number Function : 5 : ", solutionObj.factorialNumber(5));
console.log("Palindrome Number Function : 6 : ", solutionObj.factorialNumber(6));

console.log("Recursion || Palindrome Number : 0 : ", solutionObj.factorialUsingRecursive(0));
console.log("Recursion || Palindrome Number : 1 : ", solutionObj.factorialUsingRecursive(1));
console.log("Recursion || Palindrome Number : 2 : ", solutionObj.factorialUsingRecursive(2));
console.log("Recursion || Palindrome Number : 3 : ", solutionObj.factorialUsingRecursive(3));
console.log("Recursion || Palindrome Number : 4 : ", solutionObj.factorialUsingRecursive(4));
console.log("Recursion || Palindrome Number : 5 : ", solutionObj.factorialUsingRecursive(5));
console.log("Recursion || Palindrome Number : 6 : ", solutionObj.factorialUsingRecursive(11));


// Here, 
// Itrative Solution used less aiolary space so that is better 
// 