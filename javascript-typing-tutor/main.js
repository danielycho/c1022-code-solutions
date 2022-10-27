// create counter variable for the index
// query all span put into variable
// if event.key is equal to variable at index
// use .textContent to compare.
// if they are equal need to increment index by 1 to move to next letter.
// also change color to color-right
// also keep underline
// if wrong then it should show red.
// should also stay underlined.

var letter = document.querySelectorAll('span');
var index = 0;

function keyRightOrWrong(event) {
  if (event.key === letter[index].textContent) {
    index++;
    letter[index - 1].className = 'color-right';
    letter[index].className = 'text-decoration';
  } else if (event.key !== letter[index].textContent) {
    letter[index].className = 'color-wrong text-decoration';
  }
}

document.addEventListener('keydown', keyRightOrWrong);
