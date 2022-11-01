/* exported includes */
// Use a for loop to loop through the array
// check if array[i] === value if it is equal return true.
// if not return false.

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
