/**
 * @param {number} n
 * @returns {boolean}
 */
class Solution {
  /**
   * ❶ Brute-force Prime Checker
   * - A number is prime if it is divisible only by 1 and itself
   * - Check divisibility from 2 up to √n
   * - If any divisor is found, return false
   * 
   * TIME COMPLEXITY: O(√n)
   * SPACE COMPLEXITY: O(1) — constant space
   * ✅ Works fine for small numbers
   * ❌ Still checks too many numbers for large values of `n`
   */
  isPrime(n) {
    if (n === 1) {
      return false; // 1 is not prime
    }

    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false; // Found a divisor
      }
    }

    return true; // No divisors found, n is prime
  }

  /**
   * ❷ Optimized Prime Checker using 6k ± 1 rule
   * - All primes greater than 3 are of the form 6k ± 1 (i.e., 5, 7, 11, 13, 17, ...)
   * - Eliminate multiples of 2 and 3 early
   * - Then check i and i + 2 for divisibility, skipping other numbers
   * 
   * TIME COMPLEXITY: O(√n / 3) → more efficient than basic √n check
   * SPACE COMPLEXITY: O(1)
   * ✅ Much faster for large numbers
   * ✅ Skips unnecessary checks
   */
  isPrimeBetter(n) {
    if (n === 1) {
      return false;
    }

    if (n === 2 || n === 3) {
      return true; // 2 and 3 are prime
    }

    if (n % 2 === 0 || n % 3 === 0) {
      return false; // Eliminate multiples of 2 and 3
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false; // Check divisibility by i and i+2
      }
    }

    return true;
  }
}

// ------------------------ Testing ------------------------

const solutionObj = new Solution();

// Brute-force checks
console.log("Brute-force || Prime (7):", solutionObj.isPrime(7));
console.log("Brute-force || Prime (29):", solutionObj.isPrime(29));
console.log("Brute-force || Prime (36):", solutionObj.isPrime(36));

// Optimized checks
console.log("Optimized || Prime (7):", solutionObj.isPrimeBetter(7));
console.log("Optimized || Prime (29):", solutionObj.isPrimeBetter(29));
console.log("Optimized || Prime (36):", solutionObj.isPrimeBetter(36));
