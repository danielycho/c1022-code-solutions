/* exported compact */
// create a new array
// use a for loop with conditionals to omit values of type: false,
// null Nan 0, -0, undefined, empty string ''.
// return a new array.

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
