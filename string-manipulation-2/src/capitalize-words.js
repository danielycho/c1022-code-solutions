/* exported capitalizeWords */
// Make the string lower case and store it in value string1
// Seperate the string1 with a split method at ' ' store it in wordArray
// Use a for loop to loop through wordArray
// wordArray at index 0 use toUpperCase
// join the wordArray with .join method

function capitalizeWords(string) {
  string = string.toLowerCase();
  var wordArray = string.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].slice(1);
  }
  return wordArray.join(' ');
}
