function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('output of 5 minutes to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('output of greet with argument Beavis:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('output of getArea with arguments 17 and 42:', getArea(17, 42));

var person = {
  firstName: 'Lelouch',
  lastName: 'Lamperouge'
};
function getFirstName(person) {
  return person.firstName;
}

console.log('the output of getFirstName with argument person is', getFirstName(person));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('output of getLastElement is', getLastElement(['propane', 'and', 'propane', 'accessories']));
