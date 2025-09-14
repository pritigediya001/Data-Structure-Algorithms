class Solution {
    power(x, n) {
        let res = 1;

        for (let i = 0; i < n; i++) {

            res = res * x;
        }

        return res;
    }  
    
    // need to understand better solution here 
}



// ------------------------ 🔬 Testing ------------------------

const solutionObj = new Solution();

console.log("🔍 Brute-force || Primes ≤ 9:", solutionObj.power(2, 6));
