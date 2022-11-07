/* exported truncate */

// Use splice method to cut off strings at index parameter.
// concatanate "..." with remaining string in new string.
// return string

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
