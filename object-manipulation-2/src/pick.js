/* exported pick */
// create empty newObj
// use for in loop to iterate through the key in the source
// compare using includes method. use conditional keys.includes(key)
// if they match they should be put in the newObj
// need to make sure that source[key] is not undefined because that is in the return value objective

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (keys.includes(key)) {
      if (source[key] !== undefined) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
