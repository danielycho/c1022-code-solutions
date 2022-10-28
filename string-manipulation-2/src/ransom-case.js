/* exported ransomCase */
// Make an empty string
// Use a for  loop to iterate through the string
// Use a conditional to determine if index is odd or even (i % 2 === 0)
// if true make it lower case
// if false make it upper case
// push those values into the empty string
// return empty string

function ransomCase(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString = newString + string[i].toLowerCase();
    } else {
      newString = newString + string[i].toUpperCase();
    }
  }
  return newString;
}
