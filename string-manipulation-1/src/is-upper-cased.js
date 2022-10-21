/* exported isUpperCased */

// Write Boolean comparing if a string has all uppercase or not.
// return boolean.

function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
