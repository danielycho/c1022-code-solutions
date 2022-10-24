/* exported getValues */

// Create an array
// Use a for in loop to iterate over the object and push the object.key into the new array

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
