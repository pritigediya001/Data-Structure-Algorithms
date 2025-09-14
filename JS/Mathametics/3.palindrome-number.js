/**
 * @param {number} n
 * @returns {boolean} 
 */
class Solution {
    palindromeNumber(n) {
        if (n < 10) {
            return true; // Single digit numbers are always palindromes
        }

        // const reverseNum = n.toString().split('').reverse().join('');

        let reverseNum = 0;
        let numCopy = n;

        while (numCopy > 0) {
            const lastDigit = numCopy % 10;
            reverseNum = (reverseNum * 10) + lastDigit;
            numCopy = Math.floor(numCopy / 10);
        }

        return reverseNum === n;
    }
}

// Time Complexity is O(d);

const solutionObj = new Solution();
console.log("Palindrome Number Function : 121 : ", solutionObj.palindromeNumber(121));
console.log("Palindrome Number Function : 787 : ", solutionObj.palindromeNumber(787));
console.log("Palindrome Number Function : 465 : ", solutionObj.palindromeNumber(465));