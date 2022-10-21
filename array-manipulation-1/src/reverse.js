/* exported reverse */
// create a new array
// countdown from the last index and push that into the new array.
// return new array

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
