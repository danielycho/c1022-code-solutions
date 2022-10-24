/* exported capitalize */

// -Create a variable string.
// -Always keep first letter capitalized.
// -loop through other letters
// -make everything else lower case.
// -return string.

function capitalize(word) {
  var text = '';
  text += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    text += word[i].toLowerCase();
  }
  return text;
}
