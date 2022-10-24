var totalClick = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function handleClick(event) {
  totalClick++;
  clickCount.textContent = 'Click: ' + totalClick;
  if (totalClick > 0 && totalClick < 4) {
    hotButton.className = 'hot-button cold';
  }
  if (totalClick > 4 && totalClick < 7) {
    hotButton.className = 'hot-button cool';
  }
  if (totalClick > 7 && totalClick < 10) {
    hotButton.className = 'hot-button tepid';
  }
  if (totalClick > 10 && totalClick < 13) {
    hotButton.className = 'hot-button warm';
  }
  if (totalClick > 13 && totalClick < 16) {
    hotButton.className = 'hot-button hot';
  }
  if (totalClick > 16) {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', handleClick);
