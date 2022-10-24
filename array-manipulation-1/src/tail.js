/* exported tail */
// create a new array
// use a for loop that starts at the index 1 and pushes it into the new array.
// return new array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
