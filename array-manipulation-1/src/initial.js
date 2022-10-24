/* exported initial */

// create a new array
// use a for loop that starts at index 0 that iterates up to array.length-1;
// push those values into the new array
// return new array

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
