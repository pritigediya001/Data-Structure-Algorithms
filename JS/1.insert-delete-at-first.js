const OPERATIONS = {
  INSERT: "INSERT",
  DELETE: "DELETE",
};

const insertDeleteAtFirst = (array, item, operation = OPERATIONS.INSERT) => {
  switch (operation) {
    case OPERATIONS.INSERT:
      for (i = array?.length; i >= 0; i--) {
        if (i === 0) {
          array[i] = item;
        } else {
          array[i] = array[i - 1];
        }
      }
      break;
    case OPERATIONS.DELETE:
      for (i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]; // check this properly
      }
      break;
    default:
      break;
  }

  return array;
};

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("insert 1 ", JSON.stringify(insertDeleteAtFirst(numberList, 0)));
console.log("insert 1 ", JSON.stringify(insertDeleteAtFirst(numberList, -1)));
console.log("insert 1 ", JSON.stringify(insertDeleteAtFirst(numberList, -2)));
console.log("insert 1 ", JSON.stringify(insertDeleteAtFirst(numberList, -3)));

console.log(
  "delete 1 ",
  JSON.stringify(insertDeleteAtFirst(numberList, undefined, OPERATIONS.DELETE))
);
console.log(
  "delete 1 ",
  JSON.stringify(insertDeleteAtFirst(numberList, undefined, OPERATIONS.DELETE))
);
