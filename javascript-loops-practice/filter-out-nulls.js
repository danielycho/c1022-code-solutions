/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      values.splice(i, 0);
    } else {
      array.push(values[i]);
    }
  } return array;
}
