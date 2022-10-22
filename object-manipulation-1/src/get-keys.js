/* exported getKeys */
// Create a new Array
// use for in loop to get object keys and push into newArray.
// return newArray

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
