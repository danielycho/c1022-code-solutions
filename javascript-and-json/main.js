var arrayBooks = [{
  isbn: '1234',
  title: 'Counting',
  author: 'Mrs. Count'
},
{
  isbn: '5678',
  title: 'Counting 2',
  author: 'Mr. Count'
},
{
  isbn: '91011',
  title: 'Counting 3',
  author: 'Count Countula'
}];

console.log('the typeof first object in array is:', typeof arrayBooks[0]);
console.log('the typeof second object in array is:', typeof arrayBooks[1]);
console.log('the typeof third object in array is:', typeof arrayBooks[2]);

console.log('The JSON.stringify of arrayBooks is:', JSON.stringify(arrayBooks));
console.log('The typeof of my JSON.stringify of arrayBooks is', typeof (JSON.stringify(arrayBooks)));

var forJSON = '{"id":"1234","name":"Daniel"}';
console.log('console log of student in JSON is', forJSON);
console.log('typeof for forJSON is ', typeof forJSON);

console.log('result of JSON.parse is:', JSON.parse(forJSON));
console.log('typeof of result is:', typeof JSON.parse(forJSON));
