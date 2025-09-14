/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
class Solution {

    // GCD => Greatest Common Divisor 
    // HCF => Highest Common Factor

    /**
     * ❶ Brute-force GCD method (slowest approach)
     * - Checks every number from min(a, b) down to 1
     * - TIME COMPLEXITY: O(min(a, b))
     * - SPACE COMPLEXITY: O(1)
     * - ❌ Not recommended for large inputs due to inefficiency
     */
    gcd(a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }

        let minOfLen = Math.min(a, b)        
        while (minOfLen > 0) {
            if (a % minOfLen === 0 && b % minOfLen === 0) {
                break;
            }
            minOfLen--;
        }

        return minOfLen;
    }


    /**
     * ❷ Euclidean Algorithm using subtraction
     * - GCD(a, b) = GCD(a - b, b)
     * - Keeps subtracting the smaller number from the larger one
     * - TIME COMPLEXITY: Up to O(max(a, b))
     * - SPACE COMPLEXITY: O(1)
     * - ✅ Better than brute-force, but still slow for large differences
     */
    gcdUsingEucliden(a, b) {
        while (a !== b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }

        return a;
    }


    /**
     * ❸ Optimized Euclidean Algorithm using modulo and recursion
     * - GCD(a, b) = GCD(b, a % b)
     * - Uses `%` instead of repeated subtraction
     * - TIME COMPLEXITY: O(log(max(a, b)))
     * - SPACE COMPLEXITY: O(log(max(a, b))) due to recursion stack
     * - ✅ Much faster than subtraction
     * - ❌ Uses recursion: may cause stack overflow for very large numbers
     */
    
    // In normal division, we keep subtracting smaller number from larger until result becomes 0.
    // Instead of that, we use modulo (%) to directly get the remainder in one step.
    // This avoids unnecessary repetition and makes recursion faster.
    // `%` gives remainder → lets us skip steps and directly jump to the next reduced value.
    // In each step, we call GCD(b, a % b) until one value becomes 0.
    // If b = 0 → return a as the GCD.
    // ➤ This is based on Euclidean Property: GCD(a, b) = GCD(b, a % b)
    gcdUsingEuclidenModuloWithRecursion(a, b) {
        if (b === 0) {
            return a;
        }

        return this.gcdUsingEuclidenModuloWithRecursion(b, a % b);
    }


    /**
     * ❹ Best and safest GCD implementation (recommended)
     * - Same logic as above, but with a `while` loop instead of recursion
     * - TIME COMPLEXITY: O(log(max(a, b)))
     * - SPACE COMPLEXITY: O(1)
     * - ✅ Fastest, efficient, and no recursion risk
     */
    gcdUsingEuclidenModulo(a, b) {
        while (a > 0 && b > 0) {
            if (a > b) {
                a = a % b;
            } else {
                b = b % a;
            }
        }

        return a === 0 ? b : a;
    }
}


// ------------------------ Testing ------------------------

const solutionObj = new Solution();

console.log("Brute-force || GCD(10, 15):", solutionObj.gcd(10, 15));
console.log("Brute-force || GCD(7, 9):", solutionObj.gcd(7, 9));
console.log("Brute-force || GCD(50, 30):", solutionObj.gcd(50, 30));
console.log("Brute-force || GCD(500, 100):", solutionObj.gcd(500, 100));

console.log("Euclidean Subtraction || GCD(10, 15):", solutionObj.gcdUsingEucliden(10, 15));
console.log("Euclidean Subtraction || GCD(7, 9):", solutionObj.gcdUsingEucliden(7, 9));
console.log("Euclidean Subtraction || GCD(50, 30):", solutionObj.gcdUsingEucliden(50, 30));
console.log("Euclidean Subtraction || GCD(500, 100):", solutionObj.gcdUsingEucliden(500, 100));

console.log("Euclidean Modulo Recursion || GCD(10, 15):", solutionObj.gcdUsingEuclidenModuloWithRecursion(10, 15));
console.log("Euclidean Modulo Recursion || GCD(7, 9):", solutionObj.gcdUsingEuclidenModuloWithRecursion(7, 9));
console.log("Euclidean Modulo Recursion || GCD(50, 30):", solutionObj.gcdUsingEuclidenModuloWithRecursion(50, 30));
console.log("Euclidean Modulo Recursion || GCD(500, 100):", solutionObj.gcdUsingEuclidenModuloWithRecursion(500, 100));

console.log("Euclidean Modulo Iterative || GCD(10, 15):", solutionObj.gcdUsingEuclidenModulo(10, 15));
console.log("Euclidean Modulo Iterative || GCD(7, 9):", solutionObj.gcdUsingEuclidenModulo(7, 9));
console.log("Euclidean Modulo Iterative || GCD(50, 30):", solutionObj.gcdUsingEuclidenModulo(50, 30));
console.log("Euclidean Modulo Iterative || GCD(500, 100):", solutionObj.gcdUsingEuclidenModulo(500, 100));
