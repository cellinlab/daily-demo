function tinyNew(fn) {
  const obj = {};
  obj.__proto__ = fn.prototype;

  const args = Array.prototype.slice.call(arguments, 1);
  const result = fn.apply(obj, args);

  return typeof result === 'object' ? result : obj;
}

function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

const p = tinyNew(Person, 'Tom');
p.sayName(); // Tom