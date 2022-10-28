/* exported dropRight */
// create newArray
// make conditional if count > array return array
// make a for loop that iterates through the array, but stops at array.length - count.
// push rest into the newArray and return.

function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  } for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
