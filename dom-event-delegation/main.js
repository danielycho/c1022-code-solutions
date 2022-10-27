var taskList = document.querySelector('.task-list');

function handleDone(event) {
  console.log('event.target is', event.target);
  console.log('event.target.tagName is', event.target.tagName);

  var closest = event.target.closest('.task-list-item');
  if (event.target.tagName === 'BUTTON') {
    console.log('closest task-list-item', closest);
    closest.remove();
  }
}

taskList.addEventListener('click', handleDone);
