// usage case: new
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log(`Hi, i am ${this.name}`);
}

var person = new Person('cell');
person.sayHi(); // Hi, i am cell

// implement new
function tinyNew() {
  const newObj = {};

  const constructorFn = Array.prototype.shift.call(arguments);

  newObj.__proto__ = constructorFn.prototype;

  const result = constructorFn.apply(newObj, arguments)
  return result instanceof Object ? result : newObj;
}

// test
var tinyPerson = tinyNew(Person, 'cell');
tinyPerson.sayHi(); // Hi, i am cell
console.log(tinyPerson instanceof Person); // true
