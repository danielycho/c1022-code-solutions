/* exported capitalizeWord */
// Variation of JavaScript must always come out as JavaScript
// make string1 for new string Use toLowerCase to underline word in parameter
// make conditional that if this word is === 'javascript' to make it return 'JavaScript'
// make another string2 to capitalize string1 at index 0 and concatanate with remaining string1.
// use slice method to extract remaining indexes to be concatanated.

function capitalizeWord(word) {
  var string1 = word.toLowerCase();
  if (string1 === 'javascript') {
    return 'JavaScript';
  }
  var string2 = string1[0].toUpperCase() + string1.slice(1);
  return string2;
}
