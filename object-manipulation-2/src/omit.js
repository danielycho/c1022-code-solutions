/* exported omit */
// Uses same concept of pick.js, but putting a !keys.includes(key) in the conditional
// Use this because it checks if it is there and if it is omits it.
// gives opposite effect.

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      if (source[key] !== undefined) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
