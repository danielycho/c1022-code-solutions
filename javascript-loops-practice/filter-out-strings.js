/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number' || typeof values[i] === 'boolean' || typeof values[i] === 'object') {
      array.push(values[i]);
    }
  } return array;
}
