/* exported chunk */
// Create a new array
// if size > array.length return array.
// use a for loop to loop through the array.
// using .slice(start, end) noticed that place to cut off is at index = size
// to make the for loop loop once to cut that I need to make it increment by size.
// push the slice array into new array
// return new array.

function chunk(array, size) {
  var finArray = [];
  if (size > array.length) {
    return finArray;
  }
  for (var i = 0; i < array.length; i = i + size) {
    var slicedArray = array.slice(i, i + size);
    finArray.push(slicedArray);
  }
  return finArray;
}
