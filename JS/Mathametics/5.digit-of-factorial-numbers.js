/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    // This solution will take too much time for large number 
    digitsInFactorial(n) {
        // code here
        if (n === 0 || n === 1) {
            return 1;
        }
        
        // find Factorial
        let factNumber = 1;
        for (let i=2; i <= n; i++) {
            factNumber = parseInt(factNumber * i);
        }
        
        // Calculate digit
        let factNumberCopy = parseInt(factNumber);
        let digits = 0;

        while(factNumberCopy !== 0) {
            factNumberCopy = parseInt(factNumberCopy / 10);
            digits++;
        }

        return digits;
    }

    /*
        💡 Efficient Way to Count Digits in n! using Logarithms:

        1️⃣ Instead of computing n! directly (which is very large for big n), we use this identity:

            log10(n!) = log10(1 × 2 × 3 × ... × n)

        2️⃣ Using the math rule:
            log(a × b) = log(a) + log(b)

        We break the factorial into a sum of logs:

            log10(n!) = log10(1) + log10(2) + ... + log10(n)

        3️⃣ To count the number of digits in any number `x`, use this formula:

            digits = floor(log10(x)) + 1

        4️⃣ So, digits in n! become:

            digits = floor(log10(1) + log10(2) + ... + log10(n)) + 1

        ✅ This avoids integer overflow and is much faster than calculating full factorial.

        🧠 Math Rules Used:
        - log(a × b) = log(a) + log(b)
        - digits(x) = floor(log10(x)) + 1

        ⏱️ Time Complexity: O(n)
        📦 Space Complexity: O(1)

    */
    digitsInFactorialUsingLog(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        
        let logSum = 0;
        
        for (let i=2; i<=n; i++) {
            logSum += Math.log10(i);
        }
        
        return Math.floor(logSum) + 1;
    }
}

const solutionObj = new Solution();
console.log("Digit of Factorial  : 19 : ", solutionObj.digitsInFactorial(19));
console.log("Digit of Factorial Using Log : 19 : ", solutionObj.digitsInFactorialUsingLog(19));
