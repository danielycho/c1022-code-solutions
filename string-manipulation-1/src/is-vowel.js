/* exported isVowel */

// Check if char is a, e, i, o, u (return true)
// Check if char is toUpperCase a, e, i, o, u (return true)
// else return false

function isVowel(char) {
  char.toUpperCase();
  if (char[0].toUpperCase() === 'A' || char[0].toUpperCase() === 'E' || char[0].toUpperCase() === 'I' || char[0].toUpperCase() === 'O' || char[0].toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}
