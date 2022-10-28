/* exported pick */
// create empty newObj
// use for in loop to get key and value.
// compare using includes method. use conditional keys.includes(key)
// if they match they should be put in the newObj
//

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
