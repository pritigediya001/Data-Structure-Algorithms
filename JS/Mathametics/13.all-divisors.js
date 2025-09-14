/**
 * 🧮 Divisors of a number:
 * Divisors of a number `n` are the numbers which divide `n` completely with remainder 0.
 * For example: Divisors of 28 = [1, 2, 4, 7, 14, 28]
 *
 * 🧠 Note:
 * - Brute-force approach checks all numbers from 1 to n.
 * - Efficient approach only checks till √n and uses divisor pairs.
 *
 * @param {number} n
 * @returns {array}
 */
class Solution {
  // ✅ Brute-force approach
  // 🔍 Time Complexity: O(n)
  // 💾 Space Complexity: O(d) → where d is the number of divisors
  allDivisors(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        result.push(i); // i is a divisor of n
      }
    }

    return result;
  }

  // ✅ Optimized using Square Root
  // 🔍 Time Complexity: O(√n)
  // 💾 Space Complexity: O(d) → unsorted list with possible duplicate pair entries
  allDivisorsUsingSqrt(n) {
    const result = [];

    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        result.push(i); // i is a divisor

        if (i !== n / i) {
          result.push(n / i); // Add the pair divisor (n/i) if it's different
        }
      }
    }

    return result;
  }

  // ✅ Optimized and Sorted Output
  // 🧠 First loop collects smaller divisors in order
  // 🧠 Second loop collects larger divisors in reverse
  // 🔍 Time Complexity: O(√n)
  // 💾 Space Complexity: O(d) → sorted list, no duplicates
  allDivisorsUsingSqrtSorted(n) {
    const result = [];

    let i;
    for (i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        result.push(i); // Collect smaller divisors
      }
    }

    for (i = i - 1; i >= 1; i--) {
      if (n % i === 0 && i !== n / i) {
        result.push(n / i); // Collect larger divisors to make it sorted
      }
    }

    return result;
  }
}

// ------------------------ 🔬 Testing ------------------------

const solutionObj = new Solution();

// 🧪 Brute-force
console.log("🧪 Brute-force || Divisors (28):", solutionObj.allDivisors(28)); // [1, 2, 4, 7, 14, 28]
console.log("🧪 Brute-force || Divisors (36):", solutionObj.allDivisors(36)); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log("🧪 Brute-force || Divisors (445):", solutionObj.allDivisors(445)); // [1, 5, 89, 445]

// ⚡ Efficient using sqrt
console.log(
  "⚡ Efficient || Divisors (28):",
  solutionObj.allDivisorsUsingSqrt(28)
); // [1, 28, 2, 14, 4, 7]
console.log(
  "⚡ Efficient || Divisors (36):",
  solutionObj.allDivisorsUsingSqrt(36)
); // [1, 36, 2, 18, 3, 12, 4, 9, 6]
console.log(
  "⚡ Efficient || Divisors (445):",
  solutionObj.allDivisorsUsingSqrt(445)
); // [1, 445, 5, 89]

// 🚀 Sorted Efficient Output
console.log(
  "🚀 Sorted || Divisors (28):",
  solutionObj.allDivisorsUsingSqrtSorted(28)
); // [1, 2, 4, 7, 14, 28]
console.log(
  "🚀 Sorted || Divisors (36):",
  solutionObj.allDivisorsUsingSqrtSorted(36)
); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log(
  "🚀 Sorted || Divisors (445):",
  solutionObj.allDivisorsUsingSqrtSorted(445)
); // [1, 5, 89, 445]
