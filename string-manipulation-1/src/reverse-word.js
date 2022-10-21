/* exported reverseWord */
// create a variable string
// start at end and move backwards by setting initialization from word.length - 1
// use for loop to iterate through the word from the end going down.
// return string
function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string = string + word[i];
  }
  return string;
}
