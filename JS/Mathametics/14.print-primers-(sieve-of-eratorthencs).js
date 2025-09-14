/**
 * 🔢 Problem: Print all prime numbers less than or equal to a given number `n`.
 *
 * 🧠 Concept:
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * ✅ Approaches:
 * 1. **Brute-force check for each number** → Check if each number from 1 to n is prime.
 * 2. **Sieve of Eratosthenes** → Mark non-primes efficiently using multiples.
 * 3. **Optimized Sieve** → Push prime directly while sieving to avoid second loop.
 */

class Solution {
  // ✅ Helper function to check if a number is prime (Optimized)
  // 🔍 TC: O(√n)
  isPrimeBetter(n) {
    if (n === 1) return false;
    if (n === 2 || n === 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }

  // ✅ 1. Brute-force Prime Generator using isPrime()
  // 🔍 TC: O(n√n)
  // 💾 SC: O(d) → where d is number of primes
  primePrimers(n) {
    const result = [];

    for (let i = 2; i <= n; i++) {
      if (this.isPrimeBetter(i)) {
        result.push(i);
      }
    }

    return result;
  }

  /**
 * ✅ Find all prime numbers from 2 to n using Sieve of Eratosthenes
 *
 * 👶 Simple Explanation:
 *
 * 1. Create an array where each index represents a number from 0 to n.
 *    - Assume all numbers are prime at first (mark all as true).
 *
 * 2. Mark 0 and 1 as not prime (because they are not).
 *
 * 3. Start from number 2 (first prime number).
 *    - For each number i:
 *       → If it is marked as prime:
 *           ❌ Then mark all its multiples as not prime.
 *           ✅ Example: if i = 2, mark 4, 6, 8, 10... as false.
 *           ✅ if i = 3, mark 6, 9, 12, 15... as false.
 *
 * 4. Repeat this process until i*i > n.
 *
 * 5. After finishing:
 *    - The numbers still marked as true are prime numbers.
 *
 * 🕒 Time Complexity: O(n log log n)
 * 💾 Space Complexity: O(n)
 */
primePrimersBetter(n) {
    let result = [];

    // Step 1: Make array of size n+1 and fill with true
    let isPrimeArray = [];
    isPrimeArray.length = n + 1;
    isPrimeArray.fill(true);

    // Step 2: 0 and 1 are not prime
    isPrimeArray[0] = false;
    isPrimeArray[1] = false;

    // Step 3: Start from 2 and mark all multiples of each prime
    for (let i = 2; i * i <= n; i++) {
        if (isPrimeArray[i]) {
            // Step 4: Mark all multiples of i as not prime
            for (let j = i * i; j <= n; j += i) {
                isPrimeArray[j] = false;
            }
        }
    }

    // Step 5: Collect all prime numbers
    for (let i = 2; i <= n; i++) {
        if (isPrimeArray[i]) {
            result.push(i);
        }
    }

    return result;
}


  // ✅ 3. Optimized Sieve: Push primes while marking (logic is same as )
  // 🔍 TC: O(n log log n)
  // 💾 SC: O(n)
  primePrimersBetterOptimzed(n) {
    let result = [];
    let isPrimeArray = new Array(n + 1).fill(true);
    isPrimeArray[0] = isPrimeArray[1] = false;

    for (let i = 2; i <= n; i++) {
      if (isPrimeArray[i]) {
        result.push(i);

        for (let j = i * i; j <= n; j += i) {
          isPrimeArray[j] = false;
        }
      }
    }

    return result;
  }
}

// ------------------------ 🔬 Testing ------------------------

const solutionObj = new Solution();

console.log("🔍 Brute-force || Primes ≤ 9:", solutionObj.primePrimers(9));
// ➤ [2, 3, 5, 7]
console.log("🔍 Brute-force || Primes ≤ 25:", solutionObj.primePrimers(25));
// ➤ [2, 3, 5, 7, 11, 13, 17, 19, 23]

console.log("⚡ Sieve Method || Primes ≤ 9:", solutionObj.primePrimersBetter(9));
// ➤ [2, 3, 5, 7]
console.log("⚡ Sieve Method || Primes ≤ 25:", solutionObj.primePrimersBetter(25));
// ➤ [2, 3, 5, 7, 11, 13, 17, 19, 23]

console.log(
  "🚀 Optimized Sieve || Primes ≤ 9:",
  solutionObj.primePrimersBetterOptimzed(9)
);
// ➤ [2, 3, 5, 7]
console.log(
  "🚀 Optimized Sieve || Primes ≤ 25:",
  solutionObj.primePrimersBetterOptimzed(25)
);
// ➤ [2, 3, 5, 7, 11, 13, 17, 19, 23]
