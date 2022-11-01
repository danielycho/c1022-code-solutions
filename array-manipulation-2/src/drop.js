/* exported drop */
// Create a newArray
// Use a for loop to loop through the array
// set the initialization of the i to count.
// push the variables into the newArray and return
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
