// case: call
function test(msg) {
  console.log(`${this.name}: ${msg}`);
}

var person = {
  name: 'cell',
};

test.call(person, 'hello'); // cell: hello

// implement call
Function.prototype.tinyCall = function (ctx) {
  ctx = ctx || window;

  ctx.fn = this;
  const args = [...arguments].slice(1);
  const result = ctx.fn(...args);
  delete ctx.fn;

  return result;
};

// test
test.tinyCall(person, 'hello'); // cell: hello