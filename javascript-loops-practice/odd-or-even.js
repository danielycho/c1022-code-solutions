/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      array.push('even');
    }
    if (numbers[i] % 2 !== 0) {
      array.push('odd');
    }
  }
  return array;
}
