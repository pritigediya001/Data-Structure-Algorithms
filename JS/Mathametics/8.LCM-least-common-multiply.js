/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
class Solution {
  /**
   * ❶ Brute-force LCM method (naive approach)
   * - LCM: Least Common Multiple is the smallest number divisible by both a and b
   * - Starts from max(a, b) and keeps incrementing until we find a number divisible by both
   * - TIME COMPLEXITY: O(a * b - max(a, b)) in the worst case
   * - SPACE COMPLEXITY: O(1) — constant space
   * - ❌ Very inefficient for large numbers (e.g. 1000, 999)
   */
  lcm(a, b) {
    let res = Math.max(a, b); // Start from the largest of a and b

    while (true) {
      // Keep checking until we find a number divisible by both
      if (res % a === 0 && res % b === 0) {
        return res;
      }

      res++; // Try next number
    }
  }

  /**
   * ❷ Efficient LCM method using formula
   * - Formula: LCM(a, b) = (a * b) / GCD(a, b)
   * - Uses Euclidean algorithm (with modulo) to calculate GCD first
   * - Then applies the formula to get LCM
   * - TIME COMPLEXITY: O(log(max(a, b))) due to GCD calculation
   * - SPACE COMPLEXITY: O(1) — constant space
   * - ✅ Very efficient even for large numbers
   */
  lcmUsingFormula(a, b) {
    // First, find GCD using Euclidean algorithm (modulo version)
    const gcd = this.gcdUsingEuclidenModulo(a, b);

    // Apply the formula: LCM = (a * b) / GCD
    const lcm = (a * b) / gcd;
    return lcm;
  }

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

console.log("🔁 Brute-force Approach:");
console.log("LCM(10, 15):", solutionObj.lcm(10, 15));
console.log("LCM(7, 3):", solutionObj.lcm(7, 3));
console.log("LCM(21, 8):", solutionObj.lcm(21, 8));

console.log("\n📐 Formula-Based Approach:");
console.log("LCM(10, 15):", solutionObj.lcmUsingFormula(10, 15));
console.log("LCM(7, 3):", solutionObj.lcmUsingFormula(7, 3));
console.log("LCM(21, 8):", solutionObj.lcmUsingFormula(21, 8));
