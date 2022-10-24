/* exported isLowerCased */

// Write conditional comparing if a string has all lower or not.
// return boolean.

function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  } else {
    return false;
  }
}
