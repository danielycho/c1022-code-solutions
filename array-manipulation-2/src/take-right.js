/* exported takeRight */
// create new array
// set a conditional that if count > array.length just return array
// create a loop.  The loop should start at array.length - count because we're taking
// from the right.
// push into new array and return new array.

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
