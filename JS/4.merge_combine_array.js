const mergeArray = (arr1, arr2) => {
    let j = 0;
    if (arr2.length <= 0) {
        return arr1;
    }

    if (arr1.length <= 0) {
        return arr2;
    }

    const a1 = [...arr1];
    const totalLen = a1.length + arr2.length;
    for(i = a1.length; i < totalLen; i++) {
        a1[i] = arr2[j]
        j++;
    }

    return a1;
}

const array1 = [1,2,3,4]
const array2 = [9,8,7,6]
const array3 = [10,11,12]

console.log("Merged Array 1 :: ", JSON.stringify(mergeArray(array1, [])))
console.log("Merged Array 2 :: ", JSON.stringify(mergeArray(array2, array3)))
console.log("Merged Array 3 :: ", JSON.stringify(mergeArray(array1, array3)))