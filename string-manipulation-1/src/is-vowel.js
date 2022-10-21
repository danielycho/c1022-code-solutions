/* exported isVowel */

// Check if char is a, e, i, o, u (return true)
// Check if char is toUpperCase a, e, i, o, u (return true)
// else return false

function isVowel(char) {
  char = char.toUpperCase();
  if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
