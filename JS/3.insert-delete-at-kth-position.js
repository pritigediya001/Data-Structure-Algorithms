const OPERATIONS = {
  INSERT: "INSERT",
  DELETE: "DELETE",
};

const insertDeleteAtAnyPosition = (
  array,
  position,
  item,
  operation = OPERATIONS.INSERT
) => {
  switch (operation) {
    case OPERATIONS.INSERT:
      if (position > array.length || position < 0) {
        array[position] = item;
      } else {
        for (i = array.length; i >= position; i--) {
          if (i === position) {
            array[i] = item;
          } else {
            array[i] = array[i - 1];
          }
        }
      }
      break;
    case OPERATIONS.DELETE:
      if (position > array.length || position < 0) {
        delete array[position];
      } else {
        for (i = position; i < array.length - 1; i++) {
          array[i] = array[i + 1];
        }
        array.length = array.length - 1;
      }
      break;
    default:
      break;
  }

  return array;
};

const numberList = [1, 3, 5, 6, 8];

console.log(
  "insert in between",
  JSON.stringify(insertDeleteAtAnyPosition(numberList, 1, 2))
);
console.log(
  "insert in between",
  JSON.stringify(insertDeleteAtAnyPosition(numberList, 3, 4))
);
console.log(
  "insert in between",
  JSON.stringify(insertDeleteAtAnyPosition(numberList, 6, 7))
);
console.log(
  "insert in between",
  JSON.stringify(insertDeleteAtAnyPosition(numberList, 10, 41))
);
console.log(
  "insert in between",
  JSON.stringify(insertDeleteAtAnyPosition(numberList, -2, 21))
);

console.log(
  "delete in between",
  JSON.stringify(
    insertDeleteAtAnyPosition(numberList, 2, undefined, OPERATIONS.DELETE)
  )
);
console.log(
  "delete in between",
  JSON.stringify(
    insertDeleteAtAnyPosition(numberList, 15, undefined, OPERATIONS.DELETE)
  )
);

console.log(
  "delete in between",
  JSON.stringify(
    insertDeleteAtAnyPosition(numberList, 4, undefined, OPERATIONS.DELETE)
  )
);

console.log(
  "delete in between",
  JSON.stringify(
    insertDeleteAtAnyPosition(numberList, -5, undefined, OPERATIONS.DELETE)
  )
);
