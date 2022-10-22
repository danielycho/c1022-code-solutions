/* exported toObject */

// Make an empty object
// Assign keyValuePair[0] to be a property of the object.
// Assign keyValuePair[1] to be a value of the property of the object above.

function toObject(keyValuePair) {
  var obj = {};
  var propertyName = keyValuePair[0];
  obj[propertyName] = keyValuePair[1];
  return obj;
}
