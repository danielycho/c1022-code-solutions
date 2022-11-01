/* exported take */
// Create newArray variable
// Use a for loop to loop through the array and push into newArray
// set a conditional if count > array.length return newArray without looping.
// Return newArray

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      return newArray;
    }
    newArray.push(array[i]);
  }
  return newArray;
}
