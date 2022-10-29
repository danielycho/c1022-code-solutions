/* exported omit */
// Uses same concept of pick.js, but putting a !keys.includes(key) in the conditional
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
