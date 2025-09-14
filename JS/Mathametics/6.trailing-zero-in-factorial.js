/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    // This solution will take too much time for large number 
    traillingZeroInFactorial(n) {
        // code here
        if (n === 0 || n === 1) {
            return 1;
        }
        
        // find Factorial
        let factNumber = 1;
        for (let i=2; i <= n; i++) {
            factNumber = parseInt(factNumber * i);
        }

        // Calculate zero
        let count = 0;

        while(factNumber % 10 === 0) {
            count++;
            factNumber = factNumber / 10
        }

        return count;
    }

    // ---- BEST APPROCH ----- 
    /*
        📌 Problem:
            Count the number of trailing zeros in n! (n factorial)

        🧠 Key Insight:
            A trailing zero is produced by a factor of 10.
            Since 10 = 2 × 5, every time 2 and 5 appear together in multiplication, we get a trailing 0.

            In n!, the number of 2s is always more than the number of 5s.
            So, the number of trailing zeros is determined by how many times 5 is a factor in n!.

        🧮 Math Logic:
            Count the number of times 5 is a factor in n!:
            ➤ floor(n / 5)            → counts numbers like 5, 10, 15, ...
            ➤ floor(n / 25)           → counts extra 5s from 25, 50, ...
            ➤ floor(n / 125), ...     → counts extra 5s from higher powers of 5

            Add them all:
            ➤ trailingZeros = floor(n / 5) + floor(n / 25) + floor(n / 125) + ...

        🔁 Why This Loop Works:
            Each division by a power of 5 counts how many times 5 is included in factors of n!
            The loop continues until n / power becomes 0.

        📦 Time Complexity: O(log₅(n))
        📦 Space Complexity: O(1)

        ✅ Example:
            n = 100
            → 100 / 5 = 20
            → 100 / 25 = 4
            → 100 / 125 = 0
            → Trailing zeros = 24
    */
    traillingZeroInFactorialUsingPrimeOf5(n) {
        let count = 0;
        for (let i=5; i <= n; i = i * 5) {
            count = count + Math.floor(n / i);
        }
        return count;
    }
}

const solutionObj = new Solution();
console.log("Trailing zero in factorial : 10 : ", solutionObj.traillingZeroInFactorial(10));
console.log("Trailing zero in factorial using Prime number of 5 :: ", solutionObj.traillingZeroInFactorialUsingPrimeOf5(100000))
