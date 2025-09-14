const checkPalindrom = (str) => {
    const len = Math.floor(str.length / 2);
    
    for (let i = 0; i <= len; i++) {
        const character = str[i];
        const respectiveChar = str[str.length - i - 1];

        if (respectiveChar !== character) {
            return false
        }
    }

    return true
}

console.log(" Palindrom Result = NAMAN ", checkPalindrom("NAMAN"));
console.log(" Palindrom Result = PRITI ", checkPalindrom("PRITI"));
console.log(" Palindrom Result = ABCCBA ", checkPalindrom("ABCCBA"));
