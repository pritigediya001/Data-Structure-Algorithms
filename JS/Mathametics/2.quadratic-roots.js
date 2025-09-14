/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]} (array)
 */
class Solution {
    quadraticRoots(a, b, c) {
        // code here
        const d = ((b*b) - (4*a*c));
        if (d < 0) {
            return [-1]
        }
        
        const x1 = Math.floor((-b + Math.sqrt(d)) / (2*a));
        const x2 = Math.floor((-b - Math.sqrt(d)) / (2*a));

        return x2 > x1 ? [x2, x1] : [x1, x2];
    }
}


const solutionObj = new Solution();
solutionObj.quadraticRoots(6, 16, 3);