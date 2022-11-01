/* exported numVowels */
// create a counter variable
// capitalize the whole string put in new variable.
// write a loop that loops through the new string
// in the loop write an if statement that compares string[i] to vowels A E I O U
// if comparison is true increment the counter
// return counter

function numVowels(string) {
  var counter = 0;
  var newString = string.toUpperCase();
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'A') {
      counter = counter + 1;
    } else if (newString[i] === 'E') {
      counter = counter + 1;
    } else if (newString[i] === 'I') {
      counter = counter + 1;
    } else if (newString[i] === 'O') {
      counter = counter + 1;
    } else if (newString[i] === 'U') {
      counter = counter + 1;
    }
  }
  return counter;
}
