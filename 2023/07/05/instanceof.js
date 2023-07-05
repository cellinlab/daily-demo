// usage case: instanceof
function Person(name) {
  this.name = name;
}

var p = new Person('Tom');
console.log(p instanceof Person); // true

// implement instanceof
function tinyInstanceof(left, right) {
  let proto = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null || left === undefined) {
      return false;
    }
    if (proto === left) {
      return true;
    }
    left = left.__proto__;
  }
}

console.log(tinyInstanceof(p, Person)); // true