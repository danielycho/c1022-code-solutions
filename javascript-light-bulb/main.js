var statusOfLight = true;

var light = document.querySelector('.circle');
var background = document.querySelector('.container');

function onAndOff(event) {
  if (statusOfLight) {
    light.className = 'circle off';
    background.className = 'container cont-color-off';
    statusOfLight = false;
  } else {
    light.className = 'circle on';
    background.className = 'container cont-color-on';
    statusOfLight = true;
  }
}

light.addEventListener('click', onAndOff);
