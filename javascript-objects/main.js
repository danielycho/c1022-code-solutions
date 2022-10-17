var student = {
  firstName: 'Daniel',
  lastName: 'Cho',
  age: 33
};

var fullName = student.firstName + '' + student.lastName;
console.log('value of fullName is', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Warehouse Manager';
console.log('value of livesInIrvine', student.livesInIrvine);
console.log('value of previousOccupation', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Subaru',
  model: 'BRZ',
  year: 2017
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of color', vehicle['color']);
console.log('value of isConvertible', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Hanwoori',
  type: 'Chihuahua'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
