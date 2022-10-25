var isLightOn = true;

var light = document.querySelector('.circle');
var background = document.querySelector('.container');

function onAndOff(event) {
  if (isLightOn) {
    light.className = 'circle off';
    background.className = 'container cont-color-off';
    isLightOn = false;
  } else {
    light.className = 'circle on';
    background.className = 'container cont-color-on';
    isLightOn = true;
  }
}

light.addEventListener('click', onAndOff);
