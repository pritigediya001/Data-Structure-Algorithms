const OPERATIONS = {
    INSERT: "INSERT",
    DELETE: "DELETE",
  };
  
  const insertDeleteAtLast = (array, item, operation = OPERATIONS.INSERT) => {
    switch (operation) {
      case OPERATIONS.INSERT:
        array[array.length] = item
        break;
      case OPERATIONS.DELETE:
        array.length = array.length - 1;
        // array.pop(); 
        break;
      default:
        break;
    }
  
    return array;
  };
  
  const numberList = [-5,-4,-3,-2,-1];
  
  console.log("insert 1 ", JSON.stringify(insertDeleteAtLast(numberList, 0)));
  console.log("insert 1 ", JSON.stringify(insertDeleteAtLast(numberList, 1)));
  console.log("insert 1 ", JSON.stringify(insertDeleteAtLast(numberList, 2)));
  console.log("insert 1 ", JSON.stringify(insertDeleteAtLast(numberList, 3)));
  
  console.log(
    "delete 1 ",
    JSON.stringify(insertDeleteAtLast(numberList, undefined, OPERATIONS.DELETE))
  );
  console.log(
    "delete 1 ",
    JSON.stringify(insertDeleteAtLast(numberList, undefined, OPERATIONS.DELETE))
  );
  