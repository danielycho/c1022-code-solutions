// Two attributes visibility off and visibility on determine if element shows up.
// When class overlay is off, class whiteBox is on.
// Two more elements need to have interaction: class modal-style and class no-style
// When I press modal-style(openModal) it should make overlay on, and white-box on.
// When I press no-style(noButton) it should make overlay off and white-box off.
// 2 Functions 1 for openModal and one for noButton

var overlay = document.querySelector('.overlay');
var whiteBox = document.querySelector('.white-box');
var openModal = document.querySelector('.modal-style');
var noButton = document.querySelector('.no-style');

function showModal(event) {
  overlay.className = 'overlay visibility-on';
  whiteBox.className = 'white-box visibility-on';
}

openModal.addEventListener('click', showModal);

function hideModal(event) {
  overlay.className = 'overlay visibility-off';
  whiteBox.className = 'white-box visibility-off';
}

noButton.addEventListener('click', hideModal);
