function Person() { }
const p = new Person();

function tinyInstanceof(left, right) {
  const proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(tinyInstanceof(p, Person)); // true