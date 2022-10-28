/* exported lastChars */
// Similar to first-chars
// discovered -length the index is counted from the end of the string.
// Use slice function with -length

function lastChars(length, string) {
  return string.slice(-length);
}
