var totalClick = 0;

var light = document.querySelector('.circle');
var background = document.querySelector('.container');

function onAndOff(event) {
  totalClick++;
  if (totalClick % 2 !== 0) {
    light.className = 'circle off';
    background.className = 'container cont-color-off';
  }
  if (totalClick % 2 === 0) {
    light.className = 'circle on';
    background.className = 'container cont-color-on';
  }
}

light.addEventListener('click', onAndOff);
