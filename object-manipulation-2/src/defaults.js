/* exported defaults */
// for in loop through the key in source
// if the target doesn't have undefined property for key,
// copy over source[key] value to target[key];

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
