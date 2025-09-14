/**
 * PRIME FACTORS:
 * - A prime factor of a number is a **prime number** that divides the number **exactly**, leaving no remainder.
 * - For example, the prime factors of 30 are: [2, 3, 5]
 *   because: 30 = 2 × 3 × 5 (all are prime numbers)
 *
 * Below are three different approaches to finding prime factors:
 * 1. Brute-force using isPrime check
 * 2. Efficient method using trial division up to sqrt(n)
 * 3. Optimized method using 2, 3, and skipping by 6k ± 1
 */

class Solution {
  // ❶ Utility: Optimized Prime Check (used in brute-force method)
  isPrimeBetter(n) {
    if (n === 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }

  /**
   * ❶ Brute-force Prime Factorization
   * - Checks all numbers < n and tests if they are prime
   * - Then divides n by prime powers of those numbers
   * - TIME: O(n * log n)
   * - SPACE: O(1)
   */
  primeFactors(n) {
    let result = [];
    for (let i = 2; i < n; i++) {
      if (this.isPrimeBetter(i)) {
        let x = i;
        while (n % x == 0) {
          result.push(i);
          x = x * i;
        }
      }
    }
    return result;
  }

  /**
   * ❷ Efficient Prime Factorization using sqrt(n)
   * - Loops only till √n and checks all numbers
   * - If divisible, divides completely before continuing
   * - TIME: O(√n)
   * - SPACE: O(1)
   */
  primeFactors2(n) {
    let result = [];
    if (n <= 1) return [];

    for (let i = 2; i * i <= n; i++) {
      while (n % i === 0) {
        result.push(i);
        n = n / i;
      }
    }

    if (n > 1) result.push(n);
    return result;
  }

  /**
   * ❸ Optimized Prime Factorization using 6k ± 1 trick
   * - First removes all 2s and 3s
   * - Then only checks numbers of the form 6k ± 1 (i.e., skips multiples of 2 and 3)
   * - TIME: O(√n)
   * - SPACE: O(1)
   * - ✅ Best method among the three
   */
  primeFactors3(n) {
    let result = [];
    if (n <= 1) return [];

    while (n % 2 === 0) {
      result.push(2);
      n = n / 2;
    }

    while (n % 3 === 0) {
      result.push(3);
      n = n / 3;
    }

    for (let i = 5; i * i <= n; i += 6) {
      while (n % i === 0) {
        result.push(i);
        n = n / i;
      }
      while (n % (i + 2) === 0) {
        result.push(i + 2);
        n = n / (i + 2);
      }
    }

    if (n > 3) result.push(n);
    return result;
  }
}

// ------------------------ Testing ------------------------

const solutionObj = new Solution();

console.log("🔍 Brute-force || Prime Factors (30):", solutionObj.primeFactors(30)); // [2, 3, 5]
console.log("🔍 Brute-force || Prime Factors (500):", solutionObj.primeFactors(500)); // [2, 5, 5]

console.log("⚡ Efficient || Prime Factors (30):", solutionObj.primeFactors2(30)); // [2, 3, 5]
console.log("⚡ Efficient || Prime Factors (84):", solutionObj.primeFactors2(84)); // [2, 2, 3, 7]

console.log("🚀 Optimized || Prime Factors (525):", solutionObj.primeFactors3(525)); // [3, 5, 5, 7]
console.log("🚀 Optimized || Prime Factors (256):", solutionObj.primeFactors3(256)); // [2, 2, 2, 2, 2, 2, 2, 2]
