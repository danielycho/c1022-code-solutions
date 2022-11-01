/* exported invert */
// Create new object
// use for in loop to loop through source
// set key equal to new object[source[key]]
// return new object

function invert(source) {
  var finObj = {};
  for (var key in source) {
    finObj[source[key]] = key;
  }
  return finObj;
}
