const countDigit = (n) => {
    let num = Math.abs(n);
    let count = 0;
    
    do {
      num = parseInt(num / 10);
      count++;
    } while (num > 0);
    
    return count;
}

console.log("Count Digit Function : ", countDigit(12345));
console.log("Count Digit Function : ", countDigit(4654654654));
console.log("Count Digit Function : ", countDigit(-15.34));
console.log("Count Digit Function : ", countDigit(4654564.46));