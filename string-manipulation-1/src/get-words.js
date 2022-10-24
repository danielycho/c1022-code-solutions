/* exported getWords */

// check if string in argument is string.
// Use split method to check if there is a space in the string
// use split method to find ' '
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}
