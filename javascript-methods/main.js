var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('maximumValue:', maximumValue);

var heroes = ['batman', 'flash', 'deadpool', 'wolverine'];
var randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero', randomHero);

var library = [{
  title: 'title1',
  author: 'author1'
},
{
  title: 'title2',
  author: 'author2'
},
{
  title: 'title3',
  author: 'author3'
}
];
var lastBook = library.pop();
console.log('value of lastBook', lastBook);
var firstBook = library.shift();
console.log('value of firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('remaining books', library);

var fullName = 'Daniel Cho';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName', sayMyName);
