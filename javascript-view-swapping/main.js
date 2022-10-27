var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

// make it so that if I click one tab, it adds the active className to the tab
// all other tabs should not have the active in the className.
// if viewList[i](dataview) matches then change the className to not be hidden.

function changeTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabList.length; i++) {
      if (tabList[i] === event.target) {
        tabList[i].className = 'tab active';
      } else if (tabList[i] !== event.target) {
        tabList[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (var a = 0; a < viewList.length; a++) {
      if (viewList[a].getAttribute('data-view') === dataView) {
        viewList[a].className = 'view';
      } else {
        viewList[a].className = 'view hidden';
      }
    }
  }
}

tabContainer.addEventListener('click', changeTab);
