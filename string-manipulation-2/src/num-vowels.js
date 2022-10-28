/* exported numVowels */
// create a counter variable
// capitalize the whole string put in new variable.
// write a loop that loops through the new string
// in the loop write an if statement that compares string[i] to vowels A E I O U
// if comparison is true increment the counter
// return counter

function numVowels(string) {
  var counter = 0;
  var string2 = string.toUpperCase();
  for (var i = 0; i < string2.length; i++) {
    if (string2[i] === 'A') {
      counter = counter + 1;
    }
    if (string2[i] === 'E') {
      counter = counter + 1;
    }
    if (string2[i] === 'I') {
      counter = counter + 1;
    }
    if (string2[i] === 'O') {
      counter = counter + 1;
    }
    if (string2[i] === 'U') {
      counter = counter + 1;
    }
  }
  return counter;
}
