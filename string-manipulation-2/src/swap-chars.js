/* exported swapChars */
// create a new string
// use a for loop to loop through new string
// if firstIndex = secondIndex then concat secondIndex into the string at that index.
// if secondIndex = firstIndex then concat firstIndex into the string at that index.

function swapChars(firstIndex, secondIndex, string) {
  var first = firstIndex;
  var second = secondIndex;
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i === first) {
      newStr += string[second];
    } else if
    (i === second) {
      newStr += string[first];
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
